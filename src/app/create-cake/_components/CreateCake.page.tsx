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
import { createCake, generatePresignedUrl } from '../data'
import { CakeType } from '@/domain'
import { toast } from 'sonner'

import * as z from 'zod'
import useLoading from '@/hooks/useLoading.hook'
import { ButtonLoader } from '@/ui/ButtonLoader'

const createCakeSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(1),
    imageUrl: z.string().min(1),
    type: z.nativeEnum(CakeType),
    recipe: z.array(z.string()).min(1).max(10),
    ingredients: z
        .array(
            z.object({
                name: z.string(),
                quantity: z.number().min(1),
                unit: z.string(),
            }),
        )
        .min(1),
})

const mapZodErrorsToSentences = (errors: z.ZodError): string => {
    switch (errors.issues.flatMap((issue) => issue.path)[0]) {
        case 'name':
            return "Don't forget to name your cake!"
        case 'type':
            return "Don't forget to select a cake type!"
        case 'description':
            return "Don't forget to describe your cake!"
        case 'imageUrl':
            return "Don't forget to upload an image!"
        case 'ingredients':
            return "Don't forget to add ingredients!"
        case 'recipe':
            return "Don't forget a recipe of up to 10 steps!"
        default:
            return 'Something went wrong!'
    }
}

export const CreateCakePage = () => {
    /** @State */
    const account = useActiveAccount()
    const [cakeName, setCakeName] = useState('')
    const [cakeDescription, setCakeDescription] = useState('')
    const [cakeType, setCakeType] = useState<CakeType>(CakeType.Other)
    const [recipe, setRecipe] = useState<string[]>([])
    const [ingredients, setIngredients] = useState([
        { name: '', quantity: 0, unit: '' },
    ])
    const [cakeImageUrl, setCakeImageUrl] = useState<string>('')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { isLoading, startLoading, stopLoading } = useLoading()

    /** @Interactivity */
    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: 0, unit: '' }])
    }

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index)
        setIngredients(newIngredients)
    }

    const handleIngredientChange = (
        index: number,
        field: string,
        value: string | number,
    ) => {
        const newIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return { ...ingredient, [field]: value }
            }
            return ingredient
        })
        setIngredients(newIngredients)
    }

    const handleAddRecipeStep = () => {
        if (recipe.length < 10) {
            setRecipe([...recipe, ''])
        }
    }

    const handleRemoveRecipeStep = (index: number) => {
        const newRecipe = recipe.filter((_, i) => i !== index)
        setRecipe(newRecipe)
    }

    const handleRecipeStepChange = (index: number, value: string) => {
        const newRecipe = recipe.map((step, i) => {
            if (i === index) {
                return value
            }
            return step
        })
        setRecipe(newRecipe)
    }

    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        startLoading('fileUpload')
        const file = e.target.files?.[0]
        if (file) {
            const { url: presignedUrl } = await generatePresignedUrl()

            let createFileResponse
            try {
                const uploadConfig = {
                    body: file,
                    method: 'PUT',
                    headers: {
                        'Content-Type': file.type,
                    },
                }

                createFileResponse = await fetch(presignedUrl, uploadConfig)
                if (!createFileResponse.ok) {
                    console.error(
                        'Upload error',
                        createFileResponse.status,
                        createFileResponse.statusText,
                    )
                }

                const { url } = createFileResponse
                const formattedUrl = url.split('?')[0]

                setCakeImageUrl(formattedUrl)
            } catch (error) {
                toast.error('Something went wrong!')
                return
            }

            const { url } = createFileResponse
            const formattedUrl = url.split('?')[0]

            setCakeImageUrl(formattedUrl)
            stopLoading('fileUpload')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const isValid = createCakeSchema.safeParse({
            name: cakeName,
            description: cakeDescription,
            imageUrl: cakeImageUrl!,
            type: cakeType,
            recipe,
            ingredients,
        })

        if (!isValid.success) {
            toast.error(mapZodErrorsToSentences(isValid.error))
            return
        }

        await createCake({
            address: account!.address,
            cakeName,
            cakeType,
            cakeDescription,
            recipe,
            ingredients,
            imageUrl: cakeImageUrl,
        })
    }

    /** @Render */
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
                                                onValueChange={
                                                    setCakeType as (
                                                        value: CakeType,
                                                    ) => void
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a cake type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.values(
                                                        CakeType,
                                                    ).map((type) => (
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
                                                    {isLoading('fileUpload') ? (
                                                        <ButtonLoader />
                                                    ) : (
                                                        'Upload Image'
                                                    )}
                                                </Button>
                                                {cakeImageUrl && (
                                                    <div className="ml-4">
                                                        <Image
                                                            src={cakeImageUrl}
                                                            alt="Cake preview"
                                                            width={200}
                                                            height={200}
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
                                                                    Number(
                                                                        e.target
                                                                            .value,
                                                                    ),
                                                                )
                                                            }
                                                            className="w-20"
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
                                            {recipe.map((step, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-2 mb-2"
                                                >
                                                    <Input
                                                        placeholder={`Step ${
                                                            index + 1
                                                        }`}
                                                        value={step}
                                                        onChange={(e) =>
                                                            handleRecipeStepChange(
                                                                index,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="flex-grow"
                                                    />
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveRecipeStep(
                                                                index,
                                                            )
                                                        }
                                                        className="p-2"
                                                        variant="ghost"
                                                    >
                                                        <MinusCircle className="h-5 w-5 text-[#ef9fbc]" />
                                                        <span className="sr-only">
                                                            Remove Step
                                                        </span>
                                                    </Button>
                                                </div>
                                            ))}
                                            {recipe.length < 10 && (
                                                <Button
                                                    type="button"
                                                    onClick={
                                                        handleAddRecipeStep
                                                    }
                                                    className="mt-2"
                                                    variant="outline"
                                                >
                                                    <PlusCircle className="h-5 w-5 mr-2" />
                                                    Add Step
                                                </Button>
                                            )}
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
