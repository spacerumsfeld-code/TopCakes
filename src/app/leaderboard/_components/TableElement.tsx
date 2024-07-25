import { Cake } from '@/app/_components/cake-card/CakeCard'
import { Avatar } from '@/ui/elements/avatar'
import { Badge } from '@/ui/elements/badge'
import { TableCell, TableRow } from '@/ui/elements/table'

export const TableElement = ({
    cake,
    index,
}: {
    cake: Cake
    index: number
}) => {
    return (
        <TableRow key={cake.id}>
            <TableCell className="text-neutral-200">{index + 1}</TableCell>
            <TableCell className="font-medium ">
                <div className="flex items-center gap-4">
                    <Avatar
                        src={cake.image_url}
                        alt={cake.name}
                        className="size-12"
                    />
                    <div>
                        <div className="font-medium text-neutral-200">
                            {cake.name}
                        </div>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-neutral-200">
                <Badge color="emerald">{cake.type}</Badge>
            </TableCell>
            <TableCell className="text-neutral-200">{cake.wins}</TableCell>
            <TableCell className="text-neutral-200">{cake.losses}</TableCell>
        </TableRow>
    )
}
