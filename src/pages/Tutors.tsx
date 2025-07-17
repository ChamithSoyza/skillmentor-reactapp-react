import {useState} from "react";
import {valueOf} from "node";


const Tutors = () => {
    // return (
    //     <>
    //         <section className="min-h-screen flex flex-col" style={{backgroundColor: '#f1f4f9'}}>
    //             <NavBar/>
    //         </section>
    //     </>
    // )

    const slides = [
        {
            id: 1,
            title: "Slide 1",
            text: "Slide 1 text",
        },
        {
            id: 2,
            title: "Slide 2",
            text: "Slide 2 text",
        },
        {
            id: 3,
            title: "Slide 3",
            text: "Slide 3 text",
        }
    ]

    const [slide, setSlide] = useState(1);

    const next = () => {

        const nextSlide = valueOf(slide);
        const filteredSlide = slides.filter(slides => slides.id === nextSlide);

        console.log("filteredSlide", filteredSlide);
        setSlide(slides[slides.length - 1].id++);
    }
    const prev = () => {

    }
    const reset = () => {

    }

    return (
        <div>
            <div id="navigation" className="text-center flex justify-center gap-4 ">
                <button data-testid="button-restart" className="small outlined border-2 rounded p-2" onClick={reset}>
                    Restart
                </button>
                <button data-testid="button-prev" className="small border-2 rounded p-2" onClick={prev}>
                    Prev
                </button>
                <button data-testid="button-next" className="small border-2 rounded p-2" onClick={next}>
                    Next
                </button>
            </div>

            {slides.map((slide, i) => (
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{slide.title}</h1>
                    <p data-testid="text">{slide.text}</p>
                </div>
            ))}

        </div>
    )
}
export default Tutors
