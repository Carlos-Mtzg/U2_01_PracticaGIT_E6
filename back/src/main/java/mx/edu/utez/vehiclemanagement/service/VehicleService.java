package mx.edu.utez.vehiclemanagement.service;

import mx.edu.utez.vehiclemanagement.model.Vehicle;
import mx.edu.utez.vehiclemanagement.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public Vehicle save(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }

    public Vehicle findById(int vehicleId) {
        return vehicleRepository.findById(vehicleId).orElse(null);
    }

    public void deleteVehiculo(int vehicleId) {
        vehicleRepository.deleteById(vehicleId);
    }
}
