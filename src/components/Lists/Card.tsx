type TodoProps = {
    todo: string
};

export default function Card({ todo }: TodoProps) {
    return (
        <li className="w-full h-auto flex flex-row justify-start items-center gap-3 px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[0_4px_10px_var(--card-shadow)] hover:bg-[var(--card-hover-bg)] hover:borde-[var(--card-hover-border)] transition duration-300">
            <input type="checkbox" className="accent-[var(--card-checkbox)] w-4 h-4 cursor-pointer" />
            <span className="text-lg font-medium tracking-wider text-[var(--card-text)]">{todo}</span>
        </li>
    )
}