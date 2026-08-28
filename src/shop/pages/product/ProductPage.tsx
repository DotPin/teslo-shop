import { Link, useParams } from "react-router"
import { useState } from "react";
import { useProducts } from "@/shop/hooks/useProducts";
import { useCounterStore } from "@/auth/store/auth.store";

export const ProductPage = () => {

    const { inc, dec, count } = useCounterStore();

    const { idSlug } = useParams();

    const { data } = useProducts();

    const product = data?.products.find((element) => element.title == idSlug)

    const [size, setSize] = useState(product?.sizes[0]);

    return (
        <>
            <div className="min-h-screen bg-background">
                <main className="mx-auto max-w-6xl px-6 py-10">
                    <nav className="text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-foreground">
                            Productos
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">{product?.tags}</span>
                    </nav>

                    <div className="mt-8 grid gap-12 lg:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                            <img src={product?.images[0]} alt={product?.title} width={900} height={900}
                                className="aspect-square w-full object-cover" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                {product?.tags[0]}
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                                {product?.title}
                            </h1>
                            <p className="mt-4 text-2xl font-semibold">${product?.price}</p>

                            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                                {product?.description}
                            </p>

                            <div className="mt-8">
                                <p className="text-sm font-medium">Talla</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {product?.sizes.map((s) => (
                                        <button key={s} onClick={() => setSize(s)}
                                            className={`h-10 w-14 rounded-md border text-sm transition-colors ${size === s
                                                ? "border-foreground bg-foreground text-background"
                                                : "border-border hover:border-foreground"
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-11 items-center rounded-md border border-border">
                                    <button className="px-3 text-lg text-muted-foreground hover:text-foreground"
                                        onClick={dec}
                                        aria-label="Disminuir cantidad"
                                    >
                                        −
                                    </button>
                                    <span className="w-8 text-center text-sm">{count}</span>
                                    <button className="px-3 text-lg text-muted-foreground hover:text-foreground"
                                        onClick={inc}
                                        aria-label="Aumentar cantidad"
                                    >
                                        +
                                    </button>
                                </div>
                                <button disabled={product?.id === '0'}
                                    className="h-11 flex-1 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
                                    {product?.id === '0' ? "Sin stock" : "Añadir al carrito"}
                                </button>
                            </div>

                            <p className="mt-3 text-xs text-muted-foreground">
                                {product?.stock === 0
                                    ? "Producto agotado temporalmente."
                                    : `${product?.stock} unidades disponibles · entrega en 2-4 días`}
                            </p>

                            <dl className="mt-10 divide-y divide-border border-t border-border text-sm">
                                {product?.sizes.map((d) => (
                                    <div key={d} className="flex gap-6 py-3">
                                        <dt className="w-40 shrink-0 text-muted-foreground">
                                            {d}
                                        </dt>
                                        <dd>{d}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}
