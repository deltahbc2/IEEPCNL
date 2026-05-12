import AsideLeft from "./asideLeft";
import AsideRight from "./asideRight";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex flex-col lg:flex-row gap-8 min-h-dvh">
            <AsideLeft/>

            <main className="flex-1 space-y-6">
                <div className="bg-white rounded-2xl p-5 shadow-soft">
                    <div className="flex gap-4">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="You" className="w-10 h-10 rounded-full object-cover"/>
                        <textarea className="flex-1 bg-neutral-100 hover:bg-neutral-200/80 text-left px-4 rounded-2xl min-h-10 max-h-30 text-sm text-neutral-500 transition-colors pt-2 pb-0 focus:ring-1 focus:ring-neutral-200 focus:outline-none" placeholder="Propón una iniciativa para tu comunidad..."></textarea>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-100">
                        <div className="flex flex-col justify-center items-center">
                            <img src="/voto.png" alt="Image" className="size-20 p-4 bg-blue-50 rounded-xl cursor-pointer"/>
                            <p className="text-xs text-neutral-700 text-center mt-1">Consulta ciudadana</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://www.flaticon.es/iconos-gratis/personas" alt="Image" className="size-20 p-4 bg-blue-50 rounded-xl cursor-pointer"/>
                            <p className="text-xs text-neutral-700 text-center mt-1">Iniciativa popular</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-2">
                    <h2 className="text-lg font-bold text-neutral-900">Propuestas Populares</h2>
                    <div className="flex gap-2">
                        <button className="text-sm font-semibold text-brand-blue bg-brand-lightBlue px-3 py-1.5 rounded-full">Tendencia</button>
                        <button className="text-sm font-medium text-neutral-500 hover:text-neutral-800 px-3 py-1.5 rounded-full transition-colors">Recientes</button>
                    </div>
                </div>

                <article className="bg-white rounded-[20px] p-0 shadow-glass overflow-hidden border border-neutral-200/60">
                    <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-blue to-blue-400 flex items-center justify-center text-white shadow-sm">
                                    <i data-fa-i2svg=""><svg className="svg-inline--fa fa-tree" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tree" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"></path></svg></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-lightGreen text-brand-green uppercase tracking-wide">Presupuesto 2024</span>
                                        <span className="text-xs text-neutral-400 flex items-center gap-1"><i data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i> Monterrey Centro</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mt-1 leading-tight">Revitalización del Parque Fundidora Sur</h3>
                                </div>
                            </div>
                            <button className="text-neutral-400 hover:text-neutral-600"><i data-fa-i2svg=""><svg className="svg-inline--fa fa-ellipsis" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path></svg></i></button>
                        </div>

                        <div className="mb-5 p-4 rounded-xl bg-neutral-50 border border-neutral-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
                            <div className="flex gap-3">
                                <i className="text-brand-blue mt-0.5" data-fa-i2svg=""><svg className="svg-inline--fa fa-wand-magic-sparkles" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic-sparkles" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path></svg></i>
                                <div>
                                    <p className="text-sm text-neutral-700 leading-relaxed">
                                        <span className="font-semibold text-neutral-900">Resumen IA:</span> Propuesta para asignar $5M MXN en reforestación, iluminación solar y áreas de descanso. Impactaría a +10,000 residentes mejorando la seguridad y calidad del aire.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-64 rounded-xl overflow-hidden mb-5">
                            <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" alt="generation timeout"/>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lightBlue text-brand-blue font-semibold text-sm hover:bg-blue-100 transition-colors">
                                    <i data-fa-i2svg=""><svg className="svg-inline--fa fa-arrow-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path></svg></i> 1,240 Votos
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 text-neutral-600 font-medium text-sm hover:bg-neutral-100 transition-colors">
                                    <i data-fa-i2svg=""><svg className="svg-inline--fa fa-comment" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg></i> 342
                                </button>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-blue-800 transition-colors shadow-sm">
                                Apoyar Iniciativa
                            </button>
                        </div>
                    </div>
                </article>
            </main>

            <AsideRight/>
        </div>
    );
}
 
export default Main;