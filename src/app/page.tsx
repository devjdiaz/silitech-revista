"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-800">
      <nav className="sticky top-0 z-20 border-b border-green-700 bg-[linear-gradient(120deg,#ffffff_0%,#dcfce7_28%,#22c55e_62%,#15803d_100%)] text-stone-800 shadow-[0_10px_28px_rgba(21,128,61,0.24),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur">
        <div className="group/nav mx-auto grid max-w-7xl gap-4 px-4 py-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-8">
          <div className="order-2 flex flex-wrap justify-center gap-2 text-sm font-bold text-stone-800 lg:order-1 lg:justify-end">
            <a
              className="relative isolate overflow-hidden rounded-full px-4 py-2 transition duration-300 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded-full before:bg-green-700 before:transition-transform before:duration-300 hover:z-10 hover:scale-110 hover:text-white hover:before:scale-x-100 group-has-[a:hover]/nav:opacity-35 hover:!opacity-100"
              href="#"
            >
              Inicio
            </a>
            <a
              className="relative isolate overflow-hidden rounded-full px-4 py-2 transition duration-300 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded-full before:bg-green-600 before:transition-transform before:duration-300 hover:z-10 hover:scale-110 hover:text-white hover:before:scale-x-100 group-has-[a:hover]/nav:opacity-35 hover:!opacity-100"
              href="#"
            >
              Ediciones
            </a>
          </div>

          <div className="order-1 flex items-center justify-between gap-4 lg:order-2 lg:justify-center">
            <div className="flex items-center gap-3 text-left">
              <Image
                src="/images/logo-silitech-sa-transparent.png"
                alt="Silitech S.A."
                width={190}
                height={79}
                className="h-14 w-auto"
                priority
              />
              <div>
                <p className="font-serif text-xl font-black leading-none tracking-[0.16em]">
                  Magazine
                </p>
                <p className="font-serif text-sm italic text-green-700">
                  Confianza que da buenos frutos
                </p>
              </div>
            </div>
            <div className="rounded-full border border-green-700 bg-white px-3 py-1 text-xs font-bold text-green-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_5px_rgba(21,128,61,0.18)] sm:hidden">
              No. 24
            </div>
          </div>

          <div className="order-3 flex flex-wrap justify-center gap-2 text-sm font-bold text-stone-800 lg:justify-start">
            <a
              className="relative isolate overflow-hidden rounded-full px-4 py-2 transition duration-300 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded-full before:bg-green-700 before:transition-transform before:duration-300 hover:z-10 hover:scale-110 hover:text-white hover:before:scale-x-100 group-has-[a:hover]/nav:opacity-35 hover:!opacity-100"
              href="#"
            >
              Cultivos
            </a>
            <a
              className="relative isolate overflow-hidden rounded-full px-4 py-2 transition duration-300 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded-full before:bg-green-600 before:transition-transform before:duration-300 hover:z-10 hover:scale-110 hover:text-white hover:before:scale-x-100 group-has-[a:hover]/nav:opacity-35 hover:!opacity-100"
              href="#"
            >
              Casos de Éxito
            </a>
            <a
              className="relative isolate overflow-hidden rounded-full px-4 py-2 transition duration-300 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded-full before:bg-green-700 before:transition-transform before:duration-300 hover:z-10 hover:scale-110 hover:text-white hover:before:scale-x-100 group-has-[a:hover]/nav:opacity-35 hover:!opacity-100"
              href="#"
            >
              Nosotros
            </a>
          </div>
        </div>
      </nav>

      <section className="px-4 py-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between text-xs uppercase text-stone-800">
            <span>Edición actual</span>
            <span className="hidden sm:inline">Mayo 2026 / No. 24</span>
          </div>

          <HeroMagazine />
        </div>
      </section>

      <section className="bg-green-100 px-4 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-end justify-between gap-6 border-b border-green-700 pb-4">
            <div>
              <p className="text-sm font-black uppercase text-green-700">
                Artículos destacados
              </p>
              <h2 className="mt-2 font-serif text-4xl font-black text-amber-800">
                Tres piezas de la edición
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-stone-800 md:block">
              Lecturas clave sobre suelos, cultivos y resultados reales en el
              campo centroamericano.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="border border-green-700 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-700 to-green-100 p-4">
                <div className="flex h-full items-end border border-white/60 p-3 text-sm font-black uppercase text-white">
                  Imagen editorial
                </div>
              </div>
              <div className="mt-5 border-t border-green-700 pt-4">
                <p className="text-xs font-black uppercase text-green-700">
                  Cultivos
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight text-amber-800">
                  Cómo corregir suelos ácidos
                </h3>
                <p className="mt-4 text-sm font-semibold text-stone-800">
                  Por Laura Méndez
                </p>
              </div>
            </article>

            <article className="border border-green-700 bg-white p-4 shadow-sm md:mt-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-800 to-amber-50 p-4">
                <div className="flex h-full items-end border border-white/60 p-3 text-sm font-black uppercase text-white">
                  Imagen editorial
                </div>
              </div>
              <div className="mt-5 border-t border-green-700 pt-4">
                <p className="text-xs font-black uppercase text-green-700">
                  Casos de Éxito
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight text-amber-800">
                  Caso de éxito: Don Edgar y su sandia baby
                </h3>
                <p className="mt-4 text-sm font-semibold text-stone-800">
                  Por Andrés Rivera
                </p>
              </div>
            </article>

            <article className="border border-green-700 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-700 via-amber-50 to-amber-800 p-4">
                <div className="flex h-full items-end border border-white/60 p-3 text-sm font-black uppercase text-white">
                  Imagen editorial
                </div>
              </div>
              <div className="mt-5 border-t border-green-700 pt-4">
                <p className="text-xs font-black uppercase text-green-700">
                  Nutrición
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight text-amber-800">
                  Silicato de magnesio: el 3 en 1 del agricultor moderno
                </h3>
                <p className="mt-4 text-sm font-semibold text-stone-800">
                  Por Sofía Castillo
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-green-700 pb-4">
            <p className="text-sm font-black uppercase text-green-700">
              Ediciones anteriores
            </p>
            <h2 className="mt-2 font-serif text-4xl font-black text-amber-800">
              Archivo de portadas
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="min-h-64 border border-green-700 bg-green-700 p-4 text-white shadow-sm">
              <p className="font-serif text-6xl font-black">20</p>
              <div className="mt-16 border-t border-white/30 pt-4">
                <p className="text-sm font-black uppercase text-green-100">
                  Enero 2026
                </p>
                <p className="mt-2 text-sm text-green-100">
                  Suelos vivos
                </p>
              </div>
            </div>

            <div className="min-h-64 border border-green-700 bg-amber-800 p-4 text-white shadow-sm">
              <p className="font-serif text-6xl font-black">21</p>
              <div className="mt-16 border-t border-white/30 pt-4">
                <p className="text-sm font-black uppercase text-amber-50">
                  Febrero 2026
                </p>
                <p className="mt-2 text-sm text-amber-50">
                  Nutrición mineral
                </p>
              </div>
            </div>

            <div className="min-h-64 border border-green-700 bg-green-100 p-4 text-stone-800 shadow-sm">
              <p className="font-serif text-6xl font-black text-amber-800">
                22
              </p>
              <div className="mt-16 border-t border-green-700 pt-4">
                <p className="text-sm font-black uppercase text-green-700">
                  Marzo 2026
                </p>
                <p className="mt-2 text-sm text-stone-800">
                  Cultivos rentables
                </p>
              </div>
            </div>

            <div className="min-h-64 border border-green-700 bg-white p-4 text-stone-800 shadow-sm">
              <p className="font-serif text-6xl font-black text-amber-800">
                23
              </p>
              <div className="mt-16 border-t border-white/30 pt-4">
                <p className="text-sm font-black uppercase text-green-700">
                  Abril 2026
                </p>
                <p className="mt-2 text-sm text-stone-800">
                  Agro sostenible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-700 bg-white px-4 py-10 text-stone-800 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-sm bg-green-700 text-sm font-black text-white">
              SM
            </div>
            <div>
              <p className="font-black">Silitech Magazine</p>
              <p className="text-sm text-amber-800">
                Silitech S.A. © 2026 — Zona 10, Ciudad de Guatemala
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-stone-800">
            <a className="transition hover:text-green-700" href="#">
              Inicio
            </a>
            <a className="transition hover:text-green-700" href="#">
              Ediciones
            </a>
            <a className="transition hover:text-green-700" href="#">
              Cultivos
            </a>
            <a className="transition hover:text-green-700" href="#">
              Casos de Éxito
            </a>
            <a className="transition hover:text-green-700" href="#">
              Nosotros
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroMagazine() {
  const [isClosed, setIsClosed] = useState(true);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState<"next" | "previous">(
    "next",
  );
  const [isTurning, setIsTurning] = useState(false);

  const productItems = [
    {
      type: "Producto",
      name: "Maíz blanco criollo",
      description: "Grano seleccionado para siembra y consumo familiar.",
      price: "Q85/quintal",
      phone: "5555-1234",
      seller: "Don Pedro Xol, Huehuetenango",
    },
    {
      type: "Servicio",
      name: "Servicio de preparación de tierra",
      description: "Preparación de parcelas para siembra de temporada.",
      price: "Q300/tarea",
      phone: "5555-5678",
      seller: "Finca Los Sauces, Escuintla",
    },
    {
      type: "Producto",
      name: "Tomate cherry orgánico",
      description: "Cosecha fresca para restaurantes y distribuidores.",
      price: "Q120/caja",
      phone: "5555-9012",
      seller: "Doña María Cuc, Alta Verapaz",
    },
    {
      type: "Producto",
      name: "Frijol negro",
      description: "Frijol limpio y empacado para venta por quintal.",
      price: "Q95/quintal",
      phone: "5555-3456",
      seller: "Don Luis Tzul, Quiché",
    },
    {
      type: "Servicio",
      name: "Servicio de riego",
      description: "Instalación y mantenimiento mensual de riego agrícola.",
      price: "Q450/mes",
      phone: "5555-7890",
      seller: "Cooperativa San Marcos",
    },
    {
      type: "Producto",
      name: "Chile pimiento",
      description: "Producto fresco disponible para pedidos por caja.",
      price: "Q200/caja",
      phone: "5555-2345",
      seller: "Doña Rosa Ajú, Chiquimula",
    },
  ];

  const spreads = [
    {
      indicator: "Páginas 2-3 de 13",
      left: (
        <MagazineSheet pageNumber="02" title="Índice">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-serif text-4xl font-black text-amber-800 sm:text-5xl">
                Tabla de contenidos
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                Una guía rápida para navegar esta edición dedicada al suelo, la
                producción local y la vitrina agrícola.
              </p>
            </div>
            <div className="space-y-2">
              {[
                ["03", "Editorial de Silitech"],
                ["04", "El futuro del agro sostenible"],
                ["06", "Don Edgar y su sandia baby"],
                ["08", "Consejos de cultivo del mes"],
                ["09", "Noticias del sector agrícola"],
                ["10", "Novedades de Silitech"],
                ["11", "Vitrina Agrícola"],
                ["13", "Contraportada"],
              ].map(([page, title]) => (
                <div
                  className="flex items-center justify-between border-b border-green-700 py-3"
                  key={title}
                >
                  <span className="font-serif text-xl font-black text-amber-800">
                    {title}
                  </span>
                  <span className="text-sm font-black text-green-700">
                    {page}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="03" title="Editorial">
          <div className="flex min-h-[470px] flex-col justify-center">
            <p className="text-sm font-black uppercase text-green-700">
              Carta editorial
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-amber-800">
              Cultivar confianza también es cultivar futuro
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-800">
              En Silitech creemos que cada productor merece herramientas claras
              para tomar mejores decisiones en campo. Esta edición reúne ideas,
              casos y soluciones prácticas para fortalecer los suelos sin
              depender de químicos agresivos.
            </p>
          </div>
        </MagazineSheet>
      ),
    },
    {
      indicator: "Páginas 4-5 de 13",
      left: (
        <MagazineSheet pageNumber="04" title="Artículo principal">
          <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr]">
            <div className="min-h-80 bg-green-100 p-4">
              <div className="flex h-full items-end bg-green-700 p-5 text-sm font-black uppercase text-white">
                Suelos vivos
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-black leading-tight text-amber-800">
                El futuro del agro sostenible
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                La sostenibilidad agrícola dejó de ser una aspiración y se
                convirtió en una necesidad productiva. En fincas de Guatemala,
                Honduras y El Salvador, los agricultores están revisando el
                manejo del suelo como la base de cada cosecha.
              </p>
            </div>
          </div>
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="05" title="Artículo principal">
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase text-green-700">
                Continuación
              </p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-amber-800">
                Tecnología mineral para producir mejor
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                El silicato de magnesio ayuda a atender múltiples necesidades
                del suelo: aporta minerales, apoya la corrección de acidez y
                favorece una nutrición más equilibrada.
              </p>
            </div>
            <blockquote className="flex items-center border-l-8 border-green-700 bg-green-100 p-6 font-serif text-2xl font-black leading-tight text-amber-800">
              “Un suelo bien trabajado reduce incertidumbre.”
            </blockquote>
          </div>
        </MagazineSheet>
      ),
    },
    {
      indicator: "Páginas 6-7 de 13",
      left: (
        <MagazineSheet pageNumber="06" title="Caso de éxito">
          <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-4xl font-black leading-tight text-amber-800">
                Don Edgar y su sandia baby
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                Don Edgar buscaba una forma de mejorar el rendimiento de su
                parcela sin aumentar la dependencia de químicos. El diagnóstico
                inicial mostró suelos ácidos y una raíz con desarrollo limitado.
              </p>
            </div>
            <div className="flex min-h-80 items-end border border-green-700 bg-green-100 p-5 text-sm font-black uppercase text-green-700">
              Fotografía del cultivo
            </div>
          </div>
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="07" title="Caso de éxito">
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              {["+ raíces", "+ vigor", "+ confianza"].map((item, index) => (
                <div
                  className={`border border-green-700 p-4 ${
                    index === 2
                      ? "bg-green-700 text-white"
                      : "bg-green-100 text-stone-800"
                  }`}
                  key={item}
                >
                  <p className="font-serif text-3xl font-black">{item}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-3xl font-black text-amber-800">
                Un aprendizaje que se multiplica
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                La mejora del suelo es una práctica constante que combina
                análisis, observación y productos adecuados para cada necesidad.
              </p>
            </div>
          </div>
        </MagazineSheet>
      ),
    },
    {
      indicator: "Páginas 8-9 de 13",
      left: (
        <MagazineSheet pageNumber="08" title="Consejos">
          <h2 className="font-serif text-4xl font-black text-amber-800">
            Consejos de cultivo del mes
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              "Revise el pH antes de aplicar correctivos.",
              "Evite compactar el suelo después de lluvia fuerte.",
              "Observe raíces y color de hojas durante el crecimiento.",
              "Registre cambios por parcela para comparar resultados.",
            ].map((tip) => (
              <div className="border border-green-700 bg-green-100 p-4" key={tip}>
                <p className="text-base leading-7 text-stone-800">{tip}</p>
              </div>
            ))}
          </div>
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="09" title="Noticias">
          <h2 className="font-serif text-4xl font-black text-amber-800">
            Noticias del sector agrícola
          </h2>
          <div className="mt-7 space-y-5">
            {[
              "Productores de hortalizas reportan mayor interés en prácticas de regeneración de suelos.",
              "Cooperativas regionales impulsan capacitaciones para interpretar análisis agrícolas.",
              "La demanda de alimentos producidos con menos químicos sigue creciendo.",
            ].map((news, index) => (
              <article className="grid gap-4 border border-green-700 p-4 sm:grid-cols-[auto_1fr]" key={news}>
                <span className="font-serif text-4xl font-black text-green-700">
                  0{index + 1}
                </span>
                <p className="text-base leading-7 text-stone-800">{news}</p>
              </article>
            ))}
          </div>
        </MagazineSheet>
      ),
    },
    {
      indicator: "Páginas 10-11 de 13",
      left: (
        <MagazineSheet pageNumber="10" title="Silitech">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-serif text-4xl font-black text-amber-800">
                Novedades de Silitech
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-800">
                Este mes reforzamos nuestro acompañamiento técnico con nuevas
                sesiones de campo para productores que desean entender mejor la
                corrección de suelos ácidos.
              </p>
            </div>
            <div className="border border-green-700 bg-green-100 p-6">
              <Image
                src="/images/logo-silitech-sa-transparent.png"
                alt="Silitech S.A."
                width={230}
                height={96}
                className="h-auto w-56"
              />
            </div>
          </div>
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="11" title="Vitrina Agrícola">
          <ProductGrid products={productItems.slice(0, 3)} />
        </MagazineSheet>
      ),
    },
    {
      indicator: "Páginas 12-13 de 13",
      left: (
        <MagazineSheet pageNumber="12" title="Vitrina Agrícola">
          <ProductGrid products={productItems.slice(3, 6)} />
        </MagazineSheet>
      ),
      right: (
        <MagazineSheet pageNumber="13" title="Contraportada">
          <div className="flex min-h-[470px] flex-col items-center justify-center bg-green-700 p-8 text-center text-white">
            <Image
              src="/images/logo-silitech-sa-transparent.png"
              alt="Silitech S.A."
              width={300}
              height={125}
              className="h-auto w-64 drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
            />
            <p className="mt-10 font-serif text-4xl font-black leading-tight">
              Confianza que da buenos frutos
            </p>
          </div>
        </MagazineSheet>
      ),
    },
  ];

  const move = (direction: "next" | "previous") => {
    if (isTurning) return;

    if (isClosed && direction === "previous") return;
    if (!isClosed && direction === "next" && spreadIndex === spreads.length - 1) {
      return;
    }

    setTurnDirection(direction);
    setIsTurning(true);

    window.setTimeout(() => {
      if (isClosed && direction === "next") {
        setIsClosed(false);
        setSpreadIndex(0);
      } else if (!isClosed && direction === "previous" && spreadIndex === 0) {
        setIsClosed(true);
      } else if (direction === "next") {
        setSpreadIndex((index) => Math.min(index + 1, spreads.length - 1));
      } else {
        setSpreadIndex((index) => Math.max(index - 1, 0));
      }
    }, 240);

    window.setTimeout(() => {
      setIsTurning(false);
    }, 620);
  };

  const indicator = isClosed
    ? "Portada · Página 1 de 13"
    : spreads[spreadIndex].indicator;

  return (
    <div className="relative w-full [perspective:1800px]">
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-xs font-black uppercase text-green-700 sm:text-sm">
          {indicator}
        </p>
        <p className="hidden text-xs font-black uppercase text-stone-800 sm:block">
          {isClosed ? "Revista cerrada" : "Revista abierta"}
        </p>
      </div>

      <div className="relative min-h-[650px] bg-[radial-gradient(circle_at_center,#dcfce7_0%,#fffbeb_62%,#fffbeb_100%)] px-1 py-2 sm:px-2">
        {isClosed ? (
          <ClosedCover />
        ) : (
          <div
            className={`grid w-full overflow-hidden bg-white shadow-[0_24px_70px_rgba(21,128,61,0.16)] transition duration-300 lg:grid-cols-2 ${
              isTurning ? "scale-[0.99] opacity-80" : "scale-100 opacity-100"
            }`}
          >
            <div className="relative">
              {spreads[spreadIndex].left}
              <div className="absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-stone-800/10 to-transparent lg:block" />
            </div>
            <div className="relative border-t border-green-700 lg:border-l lg:border-t-0">
              {spreads[spreadIndex].right}
              <div className="absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-stone-800/10 to-transparent lg:block" />
            </div>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 z-20 hidden w-1/2 bg-white shadow-[0_18px_45px_rgba(21,128,61,0.24)] transition duration-500 ease-in-out md:block"
          style={{
            left: turnDirection === "next" ? "50%" : "0%",
            opacity: isTurning ? 1 : 0,
            transform:
              turnDirection === "next"
                ? isTurning
                  ? "rotateY(-78deg)"
                  : "rotateY(0deg)"
                : isTurning
                  ? "rotateY(78deg)"
                  : "rotateY(0deg)",
            transformOrigin:
              turnDirection === "next" ? "left center" : "right center",
          }}
        >
          <div className="h-full bg-[linear-gradient(90deg,rgba(21,128,61,0.16),rgba(255,255,255,0.95),rgba(220,252,231,0.92))]" />
        </div>

        <button
          aria-label="Retroceder página"
          className="absolute left-2 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-green-700 bg-white/95 text-2xl font-black text-green-700 shadow-[0_8px_20px_rgba(21,128,61,0.2)] transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-35 sm:left-4"
          disabled={isClosed}
          onClick={() => move("previous")}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Avanzar página"
          className="absolute right-2 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-green-700 bg-white/95 text-2xl font-black text-green-700 shadow-[0_8px_20px_rgba(21,128,61,0.2)] transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-35 sm:right-4"
          disabled={!isClosed && spreadIndex === spreads.length - 1}
          onClick={() => move("next")}
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function ClosedCover() {
  return (
    <div className="flex min-h-[630px] items-center justify-center py-2">
      <div className="relative min-h-[600px] w-full max-w-[480px] overflow-hidden bg-green-700 p-6 text-white shadow-[18px_18px_0_rgba(21,128,61,0.18),0_28px_70px_rgba(21,128,61,0.35)]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500" />
        <div className="absolute inset-y-0 right-0 w-8 bg-green-900/35" />
        <div className="absolute left-8 top-24 h-64 w-40 rotate-6 border border-white/25 bg-white/10" />
        <div className="absolute bottom-20 right-8 h-56 w-44 -rotate-3 border border-white/20 bg-green-900/30" />

        <div className="relative flex min-h-[530px] flex-col justify-between">
          <div className="border-b border-white/30 pb-5">
            <Image
              src="/images/logo-silitech-sa-transparent.png"
              alt="Silitech S.A."
              width={190}
              height={79}
              className="h-16 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
              priority
            />
            <p className="mt-4 font-serif text-5xl font-black leading-none">
              Magazine
            </p>
          </div>

          <div>
            <p className="mb-4 inline-block bg-green-700 px-3 py-1 text-xs font-black uppercase text-white">
              Portada
            </p>
            <h1 className="font-serif text-5xl font-black leading-[0.92]">
              Edición Mayo 2026 — El futuro del agro sostenible
            </h1>
          </div>

          <p className="border-t border-white/25 pt-5 text-lg leading-7 text-green-100">
            Descubre cómo agricultores de Centroamérica están transformando sus
            suelos sin químicos.
          </p>
        </div>
      </div>
    </div>
  );
}

function MagazineSheet({
  children,
  pageNumber,
  title,
}: {
  children: ReactNode;
  pageNumber: string;
  title: string;
}) {
  return (
    <article className="min-h-[620px] bg-white p-5 sm:p-7">
      <div className="mb-7 flex items-center justify-between border-b border-green-700 pb-4 text-xs font-black uppercase text-green-700">
        <span>{title}</span>
        <span>Página {pageNumber}</span>
      </div>
      {children}
    </article>
  );
}

function ProductGrid({
  products,
}: {
  products: Array<{
    type: string;
    name: string;
    description: string;
    price: string;
    phone: string;
    seller: string;
  }>;
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-black text-amber-800">
        Vitrina Agrícola
      </h2>
      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {products.map((product) => (
          <article className="border border-green-700 bg-white p-3" key={product.name}>
            <div className="flex aspect-[4/3] items-center justify-center bg-green-100 text-xs font-black uppercase text-green-700">
              Imagen placeholder
            </div>
            <span className="mt-3 inline-block bg-green-700 px-2 py-1 text-xs font-black uppercase text-white">
              {product.type}
            </span>
            <h3 className="mt-2 font-serif text-lg font-black leading-tight text-amber-800">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-5 text-stone-800">
              {product.description}
            </p>
            <p className="mt-3 text-lg font-black text-amber-800">
              {product.price}
            </p>
            <p className="mt-2 text-sm font-bold text-stone-800">
              ☎ Tel: {product.phone}
            </p>
            <p className="mt-1 text-sm text-stone-800">{product.seller}</p>
            <a
              className="mt-3 inline-flex h-10 w-full items-center justify-center bg-green-700 px-3 text-xs font-black text-white transition hover:bg-amber-800"
              href="#"
            >
              Contactar por WhatsApp
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
