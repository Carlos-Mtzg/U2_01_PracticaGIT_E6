package mx.edu.utez.vehiclemanagement.controller;

import mx.edu.utez.vehiclemanagement.model.Vehicle;
import mx.edu.utez.vehiclemanagement.service.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @PostMapping
    public ResponseEntity<Vehicle> save(@RequestBody Vehicle vehicle) {
        Vehicle savedVehicle = vehicleService.save(vehicle);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVehicle);
    }

    @GetMapping
    public ResponseEntity<List<Vehicle>> findAll() {
        List<Vehicle> vehicles = vehicleService.findAll();
        return ResponseEntity.ok(vehicles);
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestParam int vehicleId) {
        vehicleService.deleteVehiculo(vehicleId);
        return ResponseEntity.noContent().build();
    }
}
