import Card from "./Card";

type ListsProps = {
    todos: string[];
};

export default function Lists({ todos }: ListsProps) {
    return (
        <ul className="w-full h-auto flex flex-col px-5 py-4 space-y-3">
            {
                todos.map((todo: string, index: number) => (
                    <Card key={index} todo={todo} />
                ))
            }
        </ul>
    )
}