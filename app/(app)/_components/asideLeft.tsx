import { FileText } from "lucide-react";

const AsideLeft = () => {
    return (
        <aside className="w-full lg:w-64 shrink-0 space-y-6 hidden lg:block">
            <div className="bg-white rounded-2xl p-5 shadow-soft">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">Tu Perfíl</h3>
                <div className="flex items-center">
                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Profile" className="size-12 rounded-full border-2 border-white shadow-sm object-cover"/>
                    <div className="ml-4">
                        <p className="text-sm font-semibold text-neutral-900 leading-none">Ana García</p>
                        <p className="text-xs text-neutral-500 font-medium mt-1">3 Caminos</p>
                    </div>
                </div>

                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 mt-6">Historial de Participación</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <FileText className="text-[#ffc000]"/>
                        <p className="text-sm text-neutral-700">Propuesta 1</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FileText className="text-[#ffc000]"/>
                        <p className="text-sm text-neutral-700">Propuesta 2</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default AsideLeft;