import Card from '../components/card';
import Header from '../components/header';

export default function Inicio() {
    return (
        <>
            <Header />

            <div className="container">
                <Card text="Primeiro card com props" subtext="Qualquer coisa do primeiro card" />
                <Card text="Segundo card com props" subtext="Qualquer coisa do segundo card" />
                <Card text="Terceiro card com props" subtext="Qualquer coisa do terceiro card" />
            </div>
        </>
    );
}