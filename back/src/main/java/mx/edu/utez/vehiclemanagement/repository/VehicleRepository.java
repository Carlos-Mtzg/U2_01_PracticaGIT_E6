package mx.edu.utez.vehiclemanagement.repository;

import mx.edu.utez.vehiclemanagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
    // TODO: Eliminar comentario cuando se implemente provedor
//    List<Vehicle>  findByProvedorId(Long provedorId);
    List<Vehicle> findByMarca(String marca);

    List<Vehicle> findByColor(String color);

    boolean getVehicleByVehicleId(int vehicleId);
}