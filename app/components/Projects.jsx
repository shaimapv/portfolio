import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card";

function Projects() {
    return (
        <section id="projects" className="w-full flex flex-col items-center bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-10 text-center dark:text-white">I made this!!</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                <Card className="shadow-md hover:shadow-xl transition dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-4 space-y-2">
                        <h2 className="text-xl font-semibold dark:text-white">Spendwise</h2>
                        <Image
                            src="/skills/spendwise.jpg"
                            alt="Spendwise"
                            width={250}
                            height={250}
                            className="rounded"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            SpendWise is a student-friendly finance prediction tool that uses machine learning to estimate monthly savings based on past and current expenses.
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-xl transition dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-4 space-y-2">
                        <h2 className="text-xl font-semibold dark:text-white">Taskly</h2>
                        <Image
                            src="/skills/taskly.jpg"
                            alt="Taskly"
                            width={450}
                            height={450}
                            className="rounded"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            A task management web application to create, update, assign, and comment on tasks efficiently.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Projects