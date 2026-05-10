import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-stone-800">
      <nav className="sticky top-0 z-20 border-b border-green-700 bg-white text-stone-800 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-silitech-sa-transparent.png"
                alt="Silitech S.A."
                width={160}
                height={67}
                className="h-11 w-auto"
                priority
              />
              <div>
                <p className="text-base font-black">Silitech Magazine</p>
                <p className="text-xs text-amber-800">
                  Confianza que da buenos frutos
                </p>
              </div>
            </div>
            <div className="rounded-full border border-green-700 px-3 py-1 text-xs text-green-700 sm:hidden">
              No. 24
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
      </nav>

      <section className="px-4 py-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between text-xs uppercase text-stone-800">
            <span>Edición actual</span>
            <span className="hidden sm:inline">Mayo 2026 / No. 24</span>
          </div>

          <div className="grid overflow-hidden rounded-md border border-green-700 bg-white shadow-[0_28px_90px_rgba(146,64,14,0.24)] lg:grid-cols-2">
            <div className="relative min-h-[620px] overflow-hidden bg-green-700 p-5 text-white sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500" />
              <div className="absolute left-8 top-24 h-64 w-40 rotate-6 border border-white/25 bg-white/10" />
              <div className="absolute bottom-20 right-8 h-56 w-44 -rotate-3 border border-white/20 bg-green-900/30" />
              <div className="absolute inset-y-0 right-0 w-10 bg-green-900/30" />

              <div className="relative flex h-full min-h-[560px] flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-6 border-b border-white/30 pb-5">
                    <div>
                      <Image
                        src="/images/logo-silitech-sa-transparent.png"
                        alt="Silitech S.A."
                        width={190}
                        height={79}
                        className="h-16 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
                      />
                      <p className="mt-4 font-serif text-5xl font-black leading-none sm:text-7xl">
                        Magazine
                      </p>
                    </div>
                    <div className="text-right text-xs leading-5 text-green-100">
                      <p>No. 24</p>
                      <p>Mayo</p>
                      <p>2026</p>
                    </div>
                  </div>

                  <div className="mt-12 max-w-xl">
                    <p className="mb-4 inline-block bg-green-700 px-3 py-1 text-xs font-black uppercase text-white">
                      Portada
                    </p>
                    <h1 className="font-serif text-6xl font-black leading-[0.92] sm:text-7xl lg:text-8xl">
                      Edición Mayo 2026 — El futuro del agro sostenible
                    </h1>
                  </div>
                </div>

                <div className="grid gap-5 border-t border-white/25 pt-6 sm:grid-cols-[1.1fr_0.9fr]">
                  <p className="text-lg leading-7 text-green-100">
                    Descubre cómo agricultores de Centroamérica están
                    transformando sus suelos sin químicos.
                  </p>
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-green-700 px-5 text-sm font-black text-white transition hover:bg-amber-800"
                    href="#"
                  >
                    Leer ahora
                  </a>
                </div>
              </div>
            </div>

            <div className="relative bg-green-100 p-5 sm:p-8">
              <div className="absolute left-0 top-0 hidden h-full w-px bg-green-700 lg:block" />
              <div className="flex min-h-[620px] flex-col justify-between border border-green-700 bg-white p-5 shadow-inner sm:p-8">
                <div>
                  <div className="mb-8 flex items-start justify-between border-b border-green-700 pb-4 text-xs uppercase text-stone-800">
                    <span>Dentro de la edición</span>
                    <span>02</span>
                  </div>

                  <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                    <div className="space-y-5">
                      <div className="aspect-[3/4] border border-green-700 bg-gradient-to-br from-amber-50 via-green-100 to-white p-4">
                        <div className="h-full border border-amber-800 p-3">
                          <p className="text-xs font-bold uppercase text-amber-800">
                            Reportaje
                          </p>
                          <div className="mt-20 h-3 w-24 bg-amber-800" />
                          <div className="mt-3 h-3 w-32 bg-stone-800" />
                          <div className="mt-3 h-3 w-20 bg-green-700" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 bg-green-100" />
                        <div className="h-16 bg-amber-50" />
                        <div className="h-16 bg-green-700" />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase text-green-700">
                        Nota de apertura
                      </p>
                      <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-amber-800 sm:text-5xl">
                        El futuro del agro sostenible
                      </h2>
                      <p className="mt-5 text-base leading-8 text-stone-800">
                        Descubre cómo agricultores de Centroamérica están
                        transformando sus suelos sin químicos con soluciones
                        minerales de alto impacto.
                      </p>
                      <blockquote className="mt-8 border-l-4 border-green-700 pl-5 font-serif text-2xl font-bold leading-snug text-amber-800">
                        “Confianza que da buenos frutos para suelos vivos y
                        cosechas más fuertes.”
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-green-700 pt-4 text-xs uppercase text-stone-800">
                  <span>Silitech Magazine</span>
                  <span>Página 02</span>
                </div>
              </div>
            </div>
          </div>
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
