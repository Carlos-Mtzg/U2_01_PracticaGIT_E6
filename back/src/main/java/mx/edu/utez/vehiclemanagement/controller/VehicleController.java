package mx.edu.utez.vehiclemanagement.controller;

import mx.edu.utez.vehiclemanagement.config.ApiResponse;
import mx.edu.utez.vehiclemanagement.model.Supplier;
import mx.edu.utez.vehiclemanagement.model.Vehicle;
import mx.edu.utez.vehiclemanagement.repository.SupplierRepository;
import mx.edu.utez.vehiclemanagement.service.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {
    private final VehicleService vehicleService;
    private final SupplierRepository supplierRepository;

    public VehicleController(VehicleService vehicleService, SupplierRepository supplierRepository) {
        this.vehicleService = vehicleService;
        this.supplierRepository = supplierRepository;
    }

    @PostMapping
    public ResponseEntity<ApiResponse> save(@RequestBody VehicleDto dto) {
        try {
            Supplier supplier = supplierRepository.findById(dto.getProvedorId())
                    .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
            Vehicle vehicle = new Vehicle();
            vehicle.setColor(dto.getColor());
            vehicle.setMarca(dto.getMarca());
            vehicle.setModelo(dto.getModelo());
            vehicle.setSupplier(supplier);
            Vehicle savedVehicle = vehicleService.save(vehicle);
            ApiResponse response = new ApiResponse(savedVehicle, HttpStatus.CREATED, "Vehículo creado exitosamente");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            ApiResponse response = new ApiResponse(HttpStatus.BAD_REQUEST, true, "Error al crear el vehículo: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse> findAll() {
        try {
            List<Vehicle> vehicles = vehicleService.findAll();
            ApiResponse response = new ApiResponse(vehicles, HttpStatus.OK, "Lista de vehículos recuperada exitosamente");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse response = new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR, true, "Error al obtener la lista de vehículos: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> findById(@PathVariable int id) {
        try {
            Vehicle vehicle = vehicleService.findById(id);
            if (vehicle == null) {
                ApiResponse response = new ApiResponse(HttpStatus.NOT_FOUND, true, "Vehículo no encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
            ApiResponse response = new ApiResponse(vehicle, HttpStatus.OK, "Vehículo encontrado");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse response = new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR, true, "Error al buscar el vehículo: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> update(@PathVariable int id, @RequestBody Vehicle vehicle) {
        try {
            Vehicle existingVehicle = vehicleService.findById(id);
            if (existingVehicle == null) {
                ApiResponse response = new ApiResponse(HttpStatus.NOT_FOUND, true, "Vehículo no encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }

            vehicle.setVehicleId(id);
            Vehicle updatedVehicle = vehicleService.save(vehicle);
            ApiResponse response = new ApiResponse(updatedVehicle, HttpStatus.OK, "Vehículo actualizado exitosamente");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse response = new ApiResponse(HttpStatus.BAD_REQUEST, true, "Error al actualizar el vehículo: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable int id) {
        try {
            Vehicle vehicle = vehicleService.findById(id);
            if (vehicle == null) {
                ApiResponse response = new ApiResponse(HttpStatus.NOT_FOUND, true, "Vehículo no encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }

            vehicleService.deleteVehiculo(id);
            ApiResponse response = new ApiResponse(null, HttpStatus.OK, "Vehículo eliminado exitosamente");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse response = new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR, true, "Error al eliminar el vehículo: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
