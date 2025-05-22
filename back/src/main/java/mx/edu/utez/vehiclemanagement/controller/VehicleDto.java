package mx.edu.utez.vehiclemanagement.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class VehicleDto {
    private String color;
    private String modelo;
    private String marca;
    private int provedorId;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getProvedorId() {
        return provedorId;
    }

    public void setProvedorId(int provedorId) {
        this.provedorId = provedorId;
    }
}
