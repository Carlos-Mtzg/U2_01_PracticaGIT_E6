package mx.edu.utez.vehiclemanagement.service;

import mx.edu.utez.vehiclemanagement.model.Supplier;
import mx.edu.utez.vehiclemanagement.repository.SupplierRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SupplierService {

private  final SupplierRepository repository;

    public SupplierService(SupplierRepository repository) {
        this.repository = repository;
    }
    public Supplier findById(int supplierId) {
        return repository.findById(supplierId).orElse(null);
    }

    public Supplier save(Supplier supplier) {
        return repository.save(supplier);
    }

    public List<Supplier> findAll() {
        return repository.findAll();
    }
    public  void deleteSupplier(Integer supplierId) {
        repository.deleteById(supplierId);
    }
}
