-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
<<<<<<< HEAD
-- Tiempo de generación: 15-12-2023 a las 01:53:07
=======
-- Tiempo de generación: 28-11-2023 a las 14:45:13
>>>>>>> 6dc9b6892fa571899bb5d82c0c47f212b05f1cd6
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `evaluadoradministrativos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `numEmpleado` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrativo`
--

CREATE TABLE `administrativo` (
  `numEmpleado` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `area` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(20) NOT NULL,
  `expediente` varchar(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `carrera` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(30) NOT NULL,
<<<<<<< HEAD
  `NIP` varchar(50) DEFAULT NULL,
  `satisfaccion_servicio` int(11) DEFAULT NULL,
  `capacidad_respuesta` int(11) DEFAULT NULL,
  `efectividad_resolucion` int(11) DEFAULT NULL,
  `claridad_informacion` int(11) DEFAULT NULL,
  `consistencia_calidad` int(11) DEFAULT NULL,
  `amabilidad_cortesia` int(11) DEFAULT NULL,
  `utilidad_documentacion` int(11) DEFAULT NULL,
  `puntualidad_entrega` int(11) DEFAULT NULL,
  `satisfaccion_resolucion_problemas` int(11) DEFAULT NULL,
  `accesibilidad_disponibilidad` int(11) DEFAULT NULL
=======
  `NIP` varchar(50) DEFAULT NULL
>>>>>>> 6dc9b6892fa571899bb5d82c0c47f212b05f1cd6
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

<<<<<<< HEAD
INSERT INTO `estudiantes` (`id`, `expediente`, `nombre`, `apellidos`, `carrera`, `correo`, `telefono`, `NIP`, `satisfaccion_servicio`, `capacidad_respuesta`, `efectividad_resolucion`, `claridad_informacion`, `consistencia_calidad`, `amabilidad_cortesia`, `utilidad_documentacion`, `puntualidad_entrega`, `satisfaccion_resolucion_problemas`, `accesibilidad_disponibilidad`) VALUES
(1, '714563', 'Gerardo', 'Tinoco Coronel', 'Software', 'tinococoronel.gerardo@gmail.com', '442 748 1108', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '714563', 'Gerardo', 'Tinoco Coronel', 'Software', 'tinococoronel.gerardo@gmail.com', '442 748 1108', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
=======
INSERT INTO `estudiantes` (`id`, `expediente`, `nombre`, `apellidos`, `carrera`, `correo`, `telefono`, `NIP`) VALUES
(1, '714563', 'Gerardo', 'Tinoco Coronel', 'Software', 'tinococoronel.gerardo@gmail.com', '442 748 1108', NULL),
(2, '714563', 'Gerardo', 'Tinoco Coronel', 'Software', 'tinococoronel.gerardo@gmail.com', '442 748 1108', NULL);
>>>>>>> 6dc9b6892fa571899bb5d82c0c47f212b05f1cd6

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`numEmpleado`);

--
-- Indices de la tabla `administrativo`
--
ALTER TABLE `administrativo`
  ADD PRIMARY KEY (`numEmpleado`);

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
