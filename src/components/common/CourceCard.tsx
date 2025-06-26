import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faThumbsUp, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {faCertificate, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const CourceCard = ({item}) => {
    if (item && item != null) {
        console.log('Item : ', item);
    }
    return (
        <>
            {item && (
                <div className="rounded-lg border shadow-sm flex flex-col h-full bg-white">
                    <div className="p-6 flex flex-1 flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-xl">{item.course_name}</h3>
                                <div className="flex items-center space-x-2" style={{color: '#647289'}}>
                                    <FontAwesomeIcon className="text-2xl" icon={faThumbsUp}/>
                                    <p className="text-sm text-muted-foreground">{item.reviews} {item.review_status === true ? "Positive Reviews" : "Negative Reviews"}</p>
                                </div>
                                <div className="flex items-center space-x-2" style={{color: '#647289'}}>
                                    <div className="rounded-full ">
                                        <img
                                            className="size-6 object-cover object-top rounded-full"
                                            src={item.tutor_details.profile_pic}/>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.tutor_details.name}</p>
                                </div>
                                <div className="flex items-center space-x-2" style={{color: '#647289'}}>
                                    <FontAwesomeIcon className="text-2xl" icon={faBuilding}/>
                                    <p className="text-sm text-muted-foreground">{item.tutor_details.position}</p>
                                </div>
                                <div className="flex items-center space-x-2" style={{color: '#647289'}}>
                                    <FontAwesomeIcon className="text-2xl" icon={faCalendar}/>
                                    <p className="text-sm text-muted-foreground">Tutor
                                        since {item.tutor_details.started_year}</p>
                                </div>
                            </div>
                            <div className="w-36">
                                <img className="size-20 object-cover" src={item.course_picture}/>
                            </div>
                        </div>

                        <div className="mb-4 flex-grow">
                            <div>
                                <p className="text-sm transition-all duration-300 ease-in-out line-clamp-3">{item.tutor_details.self_note}</p>
                                <button className="text-amber-400 text-sm font-medium mt-1 hover:underline">See more
                                </button>
                                <button className="text-amber-400 text-sm font-medium mt-1 hover:underline" hidden>See
                                    more
                                </button>
                            </div>
                        </div>

                        <div className="flex-col font-medium mt-4">
                            <h4 className="">Highlights</h4>
                            <div
                                className="bg-gradient-to-br from-blue-100 to-blue-300 p-3 rounded flex flex-col gap-4 mt-1">
                                <div className="flex items-center space-x-2 ">
                                    <FontAwesomeIcon className="text-md" icon={faGraduationCap}/>
                                    <p className="text-sm text-muted-foreground">{item.enrollments} Enrollments</p>
                                </div>
                                {item.tutor_details.certified && (
                                    <div className="flex items-center space-x-2 ">
                                        <FontAwesomeIcon className="text-md" icon={faCertificate}/>
                                        <p className="text-sm text-muted-foreground">Certified Tutor</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="p-6 pt-0">
                        <button
                            className="text-center bg-gray-900 rounded p-2 w-full text-white hover:shadow-xl transition">Schedule
                            a session
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}
export default CourceCard
