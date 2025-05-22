package mx.edu.utez.vehiclemanagement.repository;

import mx.edu.utez.vehiclemanagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {

    List<Vehicle> findByMarca(String marca);

    List<Vehicle> findByColor(String color);
   List<Vehicle> findBySupplier_SupplierId(Integer supplierId);

    boolean getVehicleByVehicleId(int vehicleId);
}