package mx.edu.utez.vehiclemanagement.repository;

import mx.edu.utez.vehiclemanagement.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository  extends JpaRepository<Supplier,Integer> {
}
