import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;
    const params = { search: query || null };

    const session = await auth();

    //Old fetch that doesn't work live but on refresh
    // const posts = await client.fetch(STARTUPS_QUERY);
    // New fetch that works live
    const { data: posts } = await sanityFetch({
        query: STARTUPS_QUERY,
        params,
    });
    // console.log(JSON.stringify(posts, null, 2));

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your startup <br /> connect with entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions
                </p>
                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className={"text-30-semibold"}>
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0
                        ? posts.map((post: StartupCardType) => (
                              <StartupCard key={post?._id} post={post} />
                          ))
                        : ""}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}