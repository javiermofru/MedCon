package com.isst.medcon.controller;

import com.isst.medcon.repository.*;
import com.isst.medcon.model.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;


@Controller
public class MedconController {
    private final MedconRepository MedconRepository;

  public static final Logger log = LoggerFactory.getLogger(MedconController.class);

  public MedconController(MedconRepository MedconRepository) {
    this.MedconRepository = MedconRepository;

  }

  @GetMapping("/Medcon")
  List<Medcon> readAll() {

    return (List<Medcon>) MedconRepository.findAll();

  }



  @PostMapping("/Medcon")
  ResponseEntity<Medcon> create(@RequestBody Medcon newMedcon) throws URISyntaxException {

    Medcon result = MedconRepository.save(newMedcon);

    return ResponseEntity.created(new URI("/Medcons/" + result.getPaciente())).body(result);

  }



  @GetMapping("/Medcon/{id}")
  ResponseEntity<Medcon> read(@PathVariable String id) {

    return MedconRepository.findById(id).map(Medcon ->

        ResponseEntity.ok().body(Medcon)

    ).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));

  }


  @PutMapping("/Medcon/{id}")
  ResponseEntity<Medcon> update(@RequestBody Medcon newMedcon, @PathVariable String id) {

    return MedconRepository.findById(id).map(Medcon -> {

      Medcon.setPaciente(newMedcon.getPaciente());

      Medcon.setFecha(newMedcon.getFecha());

      Medcon.setHora(newMedcon.getHora());

      Medcon.setEstado(newMedcon.getEstado());

      Medcon.setCIPA(newMedcon.getCIPA());


      MedconRepository.save(Medcon);

      return ResponseEntity.ok().body(Medcon);

    }).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));

  }


  @DeleteMapping("Medcons/{id}")
  ResponseEntity<Medcon> delete(@PathVariable String id) {

    MedconRepository.deleteById(id);

    return ResponseEntity.ok().body(null);

  }


  @GetMapping("/Medcons/profesor/{id}")
  List<Medcon> readHora(@PathVariable String Fecha) {

    return (List<Medcon>) MedconRepository.findByFecha(Fecha);

  }


  @PostMapping("/Medcons/{id}/incrementa")
  ResponseEntity<Medcon> incrementa(@PathVariable String id) {

    return MedconRepository.findById(id).map(Medcon -> {

      Medcon.setEstado(Medcon.getEstado() + 1);

      MedconRepository.save(Medcon);

      return ResponseEntity.ok().body(Medcon);

    }).orElse(new ResponseEntity<Medcon>(HttpStatus.NOT_FOUND));  

  }
}
