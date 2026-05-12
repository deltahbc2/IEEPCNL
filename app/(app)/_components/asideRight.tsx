import { Clock } from "lucide-react";

const AsideRight = () => {
    return (
        <aside className="w-full lg:w-80 shrink-0 space-y-6 hidden lg:block">
            <div className="bg-white rounded-2xl p-5 shadow-soft">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">Seguimiento de propuestas</h3>

                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <Clock className="text-[#ffc000]"/>
                        <p className="text-sm text-neutral-700">Propuesta 1</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="text-[#ffc000]"/>
                        <p className="text-sm text-neutral-700">Propuesta 2</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default AsideRight;