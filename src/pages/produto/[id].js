import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Produto() {

    const route = useRouter();

    const { data: session } = useSession();
    console.log(session?.user)

    if (!session?.user) {
        //route.push('/');    
        
    }

    const { id } = route.query;
    return (
            <div>
                <h1>Produto {id}</h1>
            </div>
        );
}
