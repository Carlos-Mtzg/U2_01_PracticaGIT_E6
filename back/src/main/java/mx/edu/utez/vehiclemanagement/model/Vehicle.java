package mx.edu.utez.vehiclemanagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vehiculos")
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    @Id
    @Column
    private int vehicleId;
    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String modelo;

    @Column(nullable = false)
    private String marca;

    // TODO: Eliminar comentario dependiendo de la relación de proveedor
//    @ManyToOne
//    @JoinColumn(name = "proveedor_id", nullable = false)
//    private Proveedor proveedor;
}
