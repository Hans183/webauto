import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="piedepagina">
    <div className="grupo1">
        <div className="box">
            <figure>
                <img src="logo.png" alt="FERRO"/>
            </figure>
        </div>
        <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Ferro automotores nacio en el año 2022 de la mano del grupo de programadores Agustin, Fransisco y Hans.</p>
            <p>La empresa se dedica a la compra y venta de autos usados priorizando siempre la facilidad de pago para cliente.</p>
            <p>Trabajando con las mejores marcas.</p>
        </div>
        </div>
        <div class="box">
            <h2>SIGUENOS</h2>
            <div class="Redessociales">
            <a href="/" className="icon-instagram"></a>
            <a href="/" className="icon-facebook"></a>
            <a href="/" className="icon-youtube"></a>
        </div>
    <br/>
</div>

<div>
    <small>&copy; 2022 <b>Ferro automotores</b>  - Todos los derechos reservados</small>
</div>
</footer>
    </div>
  )
}

export default Footer
