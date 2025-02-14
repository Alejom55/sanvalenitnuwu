"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import confetti from 'canvas-confetti';

export default function ValentineInvitation() {
    const [confirmed, setConfirmed] = useState(false)
    const handleClick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    const handleConfirm = () => {
        handleClick()
        setConfirmed(true)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-100">
            <Card className="w-full max-w-md bg-white shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-pink-600">Mi AnitaMaxWin</CardTitle>
                    <Heart className="w-16 h-16 mx-auto mt-4 text-red-500" />
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    {!confirmed ? (
                        <img src="/cat.jpg" alt="Valentine" className="w-full h-[300px] object-contain rounded-t-lg" />
                    ) : (
                        <img src="/monos.jpg" alt="Valentine" className="w-full h-[300px] object-contain rounded-t-lg" />
                    )}
                    <p className="text-gray-600">Te amo mucho mi linda, quiero ir a comer contigo y darte muchos besitos.</p>
                    <div className="text-pink-600 font-medium">
                        <p>Fecha: 14 de Febrero</p>
                        <p>Hora: 7:00</p>
                        <p>Lugar: En los patos</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4">
                    {!confirmed ? (
                        <Button className="bg-pink-600 hover:bg-pink-700 text-white" onClick={handleConfirm}>
                            Confirmar Asistencia
                        </Button>
                    ) : (
                        <>
                            <p className="text-green-600 font-semibold">¡Asistencia confirmada!</p>
                            <p className="text-gray-600">No puedo esperar para verte mi marmota❤️</p>
                        </>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

