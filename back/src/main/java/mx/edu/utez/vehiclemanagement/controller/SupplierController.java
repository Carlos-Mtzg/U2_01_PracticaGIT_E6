package mx.edu.utez.vehiclemanagement.controller;

import mx.edu.utez.vehiclemanagement.model.Supplier;
import mx.edu.utez.vehiclemanagement.service.SupplierService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/suppliers")
@CrossOrigin(origins = "*")
public class SupplierController {
    private final SupplierService supplierService;

    public SupplierController(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> getAllSuppliers() {
        Map<String, Object> response = new HashMap<>();
        List<Supplier> suppliers = supplierService.findAll();
        response.put("data", suppliers);
        response.put("message", "Lista de proveedores recuperada");
        response.put("status", 200);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getSupplierById(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Supplier supplier = supplierService.findById(id);

        if (supplier == null) {
            response.put("data", null);
            response.put("message", "Proveedor no encontrado");
            response.put("status", 404);
            return ResponseEntity.status(404).body(response);
        }

        response.put("data", supplier);
        response.put("message", "Proveedor encontrado");
        response.put("status", 200);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/")
    public ResponseEntity<Map<String, Object>> createSupplier(@RequestBody Supplier supplier) {
        Map<String, Object> response = new HashMap<>();
        Supplier savedSupplier = supplierService.save(supplier);
        response.put("data", savedSupplier);
        response.put("message", "Proveedor creado exitosamente");
        response.put("status", 201);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateSupplier(@PathVariable Integer id,
            @RequestBody Supplier supplier) {
        Map<String, Object> response = new HashMap<>();
        Supplier existingSupplier = supplierService.findById(id);

        if (existingSupplier == null) {
            response.put("data", null);
            response.put("message", "Proveedor no encontrado");
            response.put("status", 404);
            return ResponseEntity.status(404).body(response);
        }

        supplier.setSupplierId(id);
        Supplier updatedSupplier = supplierService.save(supplier);
        response.put("data", updatedSupplier);
        response.put("message", "Proveedor actualizado exitosamente");
        response.put("status", 200);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteSupplier(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Supplier supplier = supplierService.findById(id);

        if (supplier == null) {
            response.put("data", null);
            response.put("message", "Proveedor no encontrado");
            response.put("status", 404);
            return ResponseEntity.status(404).body(response);
        }

        supplierService.deleteSupplier(id);
        response.put("data", null);
        response.put("message", "Proveedor eliminado exitosamente");
        response.put("status", 200);
        return ResponseEntity.ok(response);
    }

}
