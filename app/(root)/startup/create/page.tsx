import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();

    if (!session) return redirect("/");
    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">Submit your startup</h1>
            </section>

            <StartupForm />
        </>
    );
}
