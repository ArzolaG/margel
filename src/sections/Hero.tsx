import Events from "../components/Events";
import Header from "../components/Header";

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('/hero-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="z-10 w-full text-white flex flex-col justify-between h-screen">
                <Header />
                <h1 className="font-semibold text-8xl max-w-[70%] leading-tight">Find Balance, Heal Your Soul, and Awaken Your Spirit</h1>

                <article className="grid grid-cols-2 min-h-72">
                    <div>
                        <p>Upcoming Events</p>
                        <div className=" border-t border-white border-opacity-30 h-full">
                            <Events />
                        </div>
                    </div>
                    <div>
                        <p>General Information</p>
                        <div className="border-t border-l border-white border-opacity-30 h-full">
                            <p>
                                Guided spiritual healing through Reiki, Tarot, Meditation, and more. Align your energy and embrace inner
                                peace.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Hero;
