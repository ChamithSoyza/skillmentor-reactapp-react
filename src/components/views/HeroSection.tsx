const HeroSection = () => {
    return (
        <>
            <div className="flex items-center justify-center space-y-8 text-center py-5 flex-col">
                <div className="space-y-2">
                    <h2 className="sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">Find your SkillMentor</h2>
                    <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400 max-w-xs sm:max-w-full">Empower your career with personalized mentorship for AWS Developer
                        Associate, Interview Prep, and more.</p>
                </div>
                <div className="p-2 text-xl inline-flex items-center justify-center text-sm text-gray-900 bg-amber-400 hover:bg-amber-500 rounded transition duration-150 font-semibold">Sign up to see all tutors</div>
            </div>
        </>
    )
}
export default HeroSection
