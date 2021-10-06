type Props = {
    name: string,
    age: number
}

export const Header = ({ name, age }: Props) => {

    return (
        <header>
            <h1>Algum título interessante</h1>
            <p>Olá, {name}, tudo bem? Parabéns pelos seus {age} anos!</p>
        </header>
    );
}