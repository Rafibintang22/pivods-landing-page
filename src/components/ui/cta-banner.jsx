import { layoutStyles } from "@/app/style";
import { Button } from "../global";
import { PhoneCall } from "lucide-react";
function CtaBanner({ ctaText, smallText }) {
    return (
        <div
            className={`w-full mt-32 md:mt-16  ${layoutStyles.container} flex justify-between items-center max-lg:flex-col max-lg:gap-y-5`}
        >
            <div className="w-3/4 max-lg:w-full max-lg:text-center">
                <h1 className="text-lg max-lg:text-[17px] font-semibold">{ctaText}</h1>
                <p className="text-gray-600 text-[15px] lg dark:text-gray-400 w-full">
                    {smallText}
                </p>
            </div>
            <div className="w-1/4 flex justify-end max-lg:w-full max-lg:justify-center">
                <button className="px-6 py-3 text-[20px] max-lg:text-[13px] bg-primary/20 rounded-xl hover:bg-primary/80 text-primary shadow-lg transition flex items-center gap-2">
                    <PhoneCall className="max-lg:hidden" size={25} />
                    <PhoneCall className="min-lg:hidden" size={15} />
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default CtaBanner;
