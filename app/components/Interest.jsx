import React from "react";
import {
    Monitor,
    BrainCircuit,
    Camera,
    BookOpen,
    Server,
    Code2,
    NotebookPen
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
    {
        title: "Reading Books",
        icon: <BookOpen size={32} className="text-yellow-400" />,
    },
    {
        title: "Coding",
        icon: <Code2 size={32} className="text-green-400" />,
    },
    {
        title: "Backend Development",
        icon: <Server size={32} className="text-blue-400" />,
    },
    {
        title: "Web Design",
        icon: <Monitor size={32} className="text-pink-400" />,
    },
    {
        title: "AI / ML",
        icon: <BrainCircuit size={32} className="text-purple-400" />,
    },
];

export default function Interest() {
    return (
        <section
            id="interest"
            className="w-full flex flex-col items-center py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            <h1 className="text-4xl font-bold mb-10 text-center dark:text-white">
                My Interests
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {interests.map((interest) => (
                    <Card
                        key={interest.title}
                        className="flex flex-col items-center justify-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-800"
                    >
                        {interest.icon}
                        <CardContent className="mt-3 text-center">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                                {interest.title}
                            </h2>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}