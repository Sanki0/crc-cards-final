import React from 'react'
import '../../../styles/Home.scss'

function LandingPage() {
    return (
        <>
            <div className="Home">
                <h1 className="Home-title">CRC cards Generator</h1>
                <div className="Home-descripcion">
                    El programa CRC Cards, está desarrollado por
                    <ul>
                        <li>
                            Sebastian Ferreyra
                        </li>
                        <li>
                            Yang Yana
                        </li>
                        <li>
                            Carlos Malvaceda
                        </li>
                        <li>
                            Julio Rosales
                        </li>
                        <li>
                            Gabriel Quiroz
                        </li>
                    </ul>
                    El programa CRC Cards permitirá a los
                    usuarios crear, diseñar y compartir tarjetas CRC , asi como la gestión de estas.
                </div>
                <div className="mision">
                    <h2>Mision</h2>
                    Somos profesionales en el desarrollo y manejo de software, comprometidos a brindar confianza y mejorar la calidad de vida de nuestros clientes. Creada para contribuir al desarrollo social del país, diseñando productos y servicios de alta competitividad, con personal capacitado y  equipos de tecnología que son de vital importancia para la producción de la compañía.
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    CRC Cards Group Developers tienen como visión impulsar el desarrollo de software de alta calidad, satisfaciendo las necesidades de usuarios en general. Aplicando tecnologías recientes. Factores como  la responsabilidad, talento humano e innovación son parte fundamentales que complementan los pilares de nuestra organización
                </div>
            </div>

        </>
    )
}

export default LandingPage
