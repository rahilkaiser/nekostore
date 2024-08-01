import UserProfile from "@/components/UserProfile";
import {wixClientServer} from "@/lib/wixClientServer";
import {members} from "@wix/members";
import {redirect} from "next/navigation";

// Mark this page dynamic because the access to this page relies on the cookie
export const dynamic = 'force-dynamic';
export default async function Profile() {

    try {
        const wixClient: any = await wixClientServer();

        const user = await wixClient.members.getCurrentMember({
            fieldsets: [members.Set.FULL],
        });

        if (!user.member?.contactId) {
            redirect('/login');
        }

        return (
            <div>
                <UserProfile currentUser={user}/>
            </div>
        );
    } catch (error: any) {
        console.log(error)
        redirect('/login');

    }
}
