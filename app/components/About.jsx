import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card";

function About() {
    const skills = [
        { name: "Python", icon: "/skills/python.jpg" },
        { name: "Java", icon: "/skills/java.jpg" },
        { name: "HTML", icon: "/skills/html.jpg" },
        { name: "CSS", icon: "/skills/css.jpg" },
        { name: "JavaScript", icon: "/skills/js.jpg" },
        { name: "MySQL", icon: "/skills/mysql.jpg" },
        { name: "Postgresql", icon: "/skills/postgresql.png" },
        { name: "c", icon: "/skills/c.png" },
    ]
    return (
        <section id="about" className="w-full flex flex-col items-center py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">About Me</h1>

            <Card className="w-full max-w-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6 space-y-4 text-center">
                    <p className="text-lg leading-relaxed dark:text-white">
                        Hi! I&apos;m <span className="font-semibold">Shaima P.V</span>, a dedicated and curious B.Tech Information Technology student from GEC Palakkad.
                        I specialize in <span className="font-semibold">Backend Development</span>, building scalable, secure, and efficient APIs,
                        and working with modern databases and cloud technologies.
                    </p>
                    <p className="text-md leading-relaxed dark:text-white">
                        Beyond backend systems, I&apos;m deeply interested in{" "}
                        <span className="font-semibold">Artificial Intelligence</span> and{" "}
                        <span className="font-semibold">Machine Learning</span>, where I enjoy exploring how
                        intelligent algorithms can be applied to solve real-world problems.
                        I also have an eye for <span className="font-semibold">Web Design</span>, ensuring
                        that the applications I work on are not just powerful, but also user-friendly.
                    </p>
                </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center dark:text-white">My Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
                {skills.map((skill) => (
                    <Card
                        key={skill.name}
                        className="flex flex-col items-center justify-center py-6 px-4 shadow-md hover:shadow-xl transition dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="relative w-16 h-16">
                            <Image src={skill.icon} alt={skill.name} fill style={{ objectFit: "contain" }} />
                        </div>
                        <p className="mt-3 font-medium dark:text-white">{skill.name}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default About