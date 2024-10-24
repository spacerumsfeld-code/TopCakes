'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/ui/components/button'
import { Input } from '@/ui/components/input'
import { Textarea } from '@/ui/components/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/ui/components/select'
import { Card, CardContent } from '@/ui/components/card'
import { PlusCircle, MinusCircle, Info, Upload } from 'lucide-react'
import Image from 'next/image'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/ui/components/tooltip'
import { CreateCakeHeader } from './CreateCakeHeader'
import { useActiveAccount } from 'thirdweb/react'
import { ConnectNow } from './ConnectNow'

const cakeTypes = [
    'Chocolate',
    'Vanilla',
    'Red Velvet',
    'Carrot',
    'Lemon',
    'Strawberry',
    'Cheesecake',
    'Other',
]

export const CreateCakePage = () => {
    // State
    const account = useActiveAccount()

    const [cakeName, setCakeName] = useState('')
    const [cakeType, setCakeType] = useState('')
    const [cakeDescription, setCakeDescription] = useState('')
    const [recipe, setRecipe] = useState('')
    const [ingredients, setIngredients] = useState([
        { name: '', quantity: '', unit: '' },
    ])
    const [cakeImage, setCakeImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '', unit: '' }])
    }

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index)
        setIngredients(newIngredients)
    }

    const handleIngredientChange = (
        index: number,
        field: string,
        value: string,
    ) => {
        const newIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return { ...ingredient, [field]: value }
            }
            return ingredient
        })
        setIngredients(newIngredients)
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // get presignedUrl from server action -> file router
            // make request to presignedUrl to upload this file.
            // set file in state, fine. Or just a few key properties.
            // imageUrl from bucket gets added to final submission to server. nothing more.
            setCakeImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log({
            cakeName,
            cakeType,
            cakeDescription,
            recipe,
            ingredients,
            cakeImage,
        })
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main>
                <CreateCakeHeader />
                {!account ? (
                    <ConnectNow />
                ) : (
                    <div className="max-w-3xl mx-auto py-4 sm:py-6 lg:py-8">
                        <Card className="bg-white shadow-lg">
                            <CardContent className="p-6">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <TooltipProvider>
                                        <div>
                                            <label
                                                htmlFor="cakeName"
                                                className="block text-sm font-medium text-[#261230] mb-1"
                                            >
                                                Name
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            Give your cake a
                                                            unique and catchy
                                                            name
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            <Input
                                                id="cakeName"
                                                value={cakeName}
                                                onChange={(e) =>
                                                    setCakeName(e.target.value)
                                                }
                                                className="w-full"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="cakeType"
                                                className="block text-sm font-medium text-[#261230] mb-1"
                                            >
                                                Cake Type
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            Select the primary
                                                            flavor or style of
                                                            your cake
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            <Select
                                                value={cakeType}
                                                onValueChange={setCakeType}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a cake type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {cakeTypes.map((type) => (
                                                        <SelectItem
                                                            key={type}
                                                            value={type}
                                                        >
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="cakeDescription"
                                                className="block text-sm font-medium text-[#261230] mb-1"
                                            >
                                                Cake Description
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            Provide a brief
                                                            description of your
                                                            cake
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            <Textarea
                                                id="cakeDescription"
                                                value={cakeDescription}
                                                onChange={(e) =>
                                                    setCakeDescription(
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full h-24"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="cakeImage"
                                                className="block text-sm font-medium text-[#261230] mb-1"
                                            >
                                                Cake Image
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            Upload an image of
                                                            your cake
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            <div className="mt-1 flex items-center">
                                                <Input
                                                    id="cakeImage"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                    ref={fileInputRef}
                                                />
                                                <Button
                                                    type="button"
                                                    onClick={() =>
                                                        fileInputRef.current?.click()
                                                    }
                                                    className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                                                >
                                                    <Upload className="w-4 h-4 mr-2" />
                                                    Upload Image
                                                </Button>
                                                {previewUrl && (
                                                    <div className="ml-4">
                                                        <Image
                                                            src={previewUrl}
                                                            alt="Cake preview"
                                                            width={100}
                                                            height={100}
                                                            className="rounded-md object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#261230] mb-1">
                                                Ingredients
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            List all ingredients
                                                            with their
                                                            quantities and units
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            {ingredients.map(
                                                (ingredient, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center space-x-2 mb-2"
                                                    >
                                                        <Input
                                                            placeholder="Ingredient"
                                                            value={
                                                                ingredient.name
                                                            }
                                                            onChange={(e) =>
                                                                handleIngredientChange(
                                                                    index,
                                                                    'name',
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="flex-grow"
                                                            required
                                                        />
                                                        <Input
                                                            placeholder="Quantity"
                                                            value={
                                                                ingredient.quantity
                                                            }
                                                            onChange={(e) =>
                                                                handleIngredientChange(
                                                                    index,
                                                                    'quantity',
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="w-20"
                                                            required
                                                        />
                                                        <Input
                                                            placeholder="Unit"
                                                            value={
                                                                ingredient.unit
                                                            }
                                                            onChange={(e) =>
                                                                handleIngredientChange(
                                                                    index,
                                                                    'unit',
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="w-20"
                                                            required
                                                        />
                                                        <Button
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemoveIngredient(
                                                                    index,
                                                                )
                                                            }
                                                            className="p-2"
                                                            variant="ghost"
                                                        >
                                                            <MinusCircle className="h-5 w-5 text-[#ef9fbc]" />
                                                            <span className="sr-only">
                                                                Remove
                                                                Ingredient
                                                            </span>
                                                        </Button>
                                                    </div>
                                                ),
                                            )}
                                            <Button
                                                type="button"
                                                onClick={handleAddIngredient}
                                                className="mt-2"
                                                variant="outline"
                                            >
                                                <PlusCircle className="h-5 w-5 mr-2" />
                                                Add Ingredient
                                            </Button>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="recipe"
                                                className="block text-sm font-medium text-[#261230] mb-1"
                                            >
                                                Recipe Instructions
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Info className="inline-block w-4 h-4 ml-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            Provide step-by-step
                                                            instructions for
                                                            making your cake
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </label>
                                            <Textarea
                                                id="recipe"
                                                value={recipe}
                                                onChange={(e) =>
                                                    setRecipe(e.target.value)
                                                }
                                                className="w-full h-40"
                                                required
                                            />
                                        </div>
                                    </TooltipProvider>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#ef9fbc] hover:bg-[#e7739e] text-[#261230]"
                                    >
                                        Bake Your Cake!
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    )
}
