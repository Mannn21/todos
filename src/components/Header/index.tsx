type HeaderProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onAdd: () => void;
};

export default function Header({input, setInput, onAdd}: HeaderProps) {
    return (
        <div className="w-full h-auto flex justify-center align-items-center bg-[var(--header-bg)] text-[var(--header-text)]">
            <div className="w-full h-auto flex flex-col p-5">
                <div className="w-full h-auto flex justify-center">
                    <h1 className="text-2xl font-semibold tracking-wider">Todos Apps</h1>
                </div>
                <div className="w-full h-auto flex flex-row justify-between items-center gap-4 px-10 py-5">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Input here..."
                            value={input}
                            className="w-full px-4 py-2 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--input-text)] placeholder-[var(--input-placeholder)] hover:border-[var(--input-border-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--input-ring)] focus:border-[var(--input-border-focus)] transition duration-300 tracking-wider  shadow-[0_4px_10px_var(--input-shadow)] focus:shadow-[0_5px_11px_var(--input-shadow-focus)]"
                            onChange={e => {
                                setInput(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-xl font-semibold tracking-wide text-[var(--button-text)] bg-[var(--button-bg)] shadow-[0_4px_10px_var(--button-shadow)] hover:bg-[var(--button-hover)] hover:shadow-[0_5px_11px_var(--button-shadow-hover)] active:bg-[var(--button-active)] focus:outline-none focus:ring-2 focus:ring-[var(--button-ring)] transition duration-300 cursor-pointer"
                            onClick={onAdd}
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}