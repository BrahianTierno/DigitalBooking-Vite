import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIos, MdStarOutline, MdStar, MdOutlineCountertops, MdOutlineDirectionsCar, MdPets, MdLocationOn} from 'react-icons/md'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FaSwimmer, FaRegSnowflake, FaWifi} from 'react-icons/fa'
import { BsWhatsapp, BsInstagram, BsPaperclip } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'
import { Menu, MenuItem } from '@mui/material'
import MapView from '../../utils/Map/MapView'
import StandardImageList from '../../pure/ListImages/ListImages'
import styles from './descriptionContainer.module.css'
import Carrusel from '../../utils/Carrusel/Carrusel'
import LikeButton from '../../utils/LikeButton'

const DescriptionContainer = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <section className={styles.top}>
                <div className={styles.titleDesc}>
                    <h6>TIPO</h6>
                    <h1>Nombre</h1>
                    <Link to="/home"><MdOutlineArrowBackIos /></Link>
                </div>
                <div className={styles.divDesc}>
                    <p className={styles.ubication}><MdLocationOn /> Ciudad en la que se encuentra el alojamiento, País, a 00m del centro</p>
                    <div className={styles.puntaje}>
                        <p>Muy bueno<span>8</span></p>
                        <div className={styles.stars}>
                            <MdStar /><MdStar /><MdStar /><MdStar /><MdStarOutline />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.likeAndShare}>
                <i onClick={handleClick}><AiOutlineShareAlt /></i>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                <MenuItem onClick={handleClose}><a href='/description' style={{textDecoration: "none", color: "black"}}>Copiar enlace <BsPaperclip style={{color:"grey"}}/></a></MenuItem>
                <MenuItem onClick={handleClose}><a  href="https://whatsapp.com" style={{textDecoration: "none", color: "black"}}>Compartir <BsWhatsapp style={{color:"green"}}/></a></MenuItem>
                <MenuItem onClick={handleClose}><a  href="https://instagram.com" style={{textDecoration: "none", color: "black"}}>Compartir <BsInstagram style={{color:"orange"}}/></a></MenuItem>
            </Menu>
                    <i><LikeButton /></i>
                </div>
                <div className={styles.images}>
                    <StandardImageList />
                </div>
                <Carrusel />
            </section>
            <br />
            <section className={styles.services}>
                <h4>Alojate en el corazón de "{"La ciudad"}"</h4>
                <br />
                <p>
                    Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.
                </p>
                <br />
                <p>
                    Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
                </p>
                <br />
                <p>
                    El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.
                </p>
                <br />
                <p>
                    El establecimiento sirve un desayuno variado de 07:00 a 10:30.
                </p>
                <br />
                <h4>¿Qué ofrece este lugar?</h4>
                <hr />
                <div className={styles.iconList}>
                    <ul className={styles.iconServices}>
                        <li><MdOutlineCountertops className={styles.icons}/> Cocina</li>
                        <li><MdOutlineDirectionsCar className={styles.icons}/> Estacionamiento</li>
                        <li><CgScreen className={styles.icons}/> Televisor</li>
                        <li><FaSwimmer className={styles.icons}/> Piscina</li>
                        <li><FaRegSnowflake className={styles.icons}/> Aire acondicionado</li>
                        <li><FaWifi className={styles.icons}/> Wifi</li>
                        <li><MdPets className={styles.icons}/> Apto mascotas</li>
                    </ul>
                </div>
            </section>
            <section className={styles.dateDisponible}>
                <h4>Fechas disponibles</h4>
            </section>
            <br />
            <section className={styles.mapaContainer}>
                <h4>¿Dónde vas a estar?</h4>
                <hr />
                <div className={styles.mapa}>
                    <MapView />
                </div>
            </section>
            <br />
            <section className={styles.listNormas}>
                <h4>Qué tenés que saber</h4>
                <br />
                <div className={styles.listas}>
                    <ul className={styles.list1}>
                        <li className={styles.titleNormas}>Normas de la casa</li>
                        <li>Check-out: 10:00hs.</li>
                        <li>No se permiten fiestas.</li>
                        <li>No fumar.</li>
                    </ul>
                    <ul className={styles.list2}>
                        <li className={styles.titleNormas}>Salud y seguridad</li>
                        <li>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.</li>
                        <li>Detector de humo.</li>
                        <li>Depósito de seguridad.</li>
                    </ul>
                    <ul className={styles.list3}>
                        <li className={styles.titleNormas}>Política de cancelación</li>
                        <li>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default DescriptionContainer