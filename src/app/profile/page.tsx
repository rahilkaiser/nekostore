import UserProfile from "@/components/UserProfile";
import {wixClientServer} from "@/lib/wixClientServer";
import {members} from "@wix/members";
import {GetCurrentMemberOptions} from "@wix/members_members";

export default async function Profile() {

    const wixClient: any = await wixClientServer();

    const user = await wixClient.members.getCurrentMember({
        fieldsets:[members.Set.FULL],
    });

    console.log(user);

    if (!user.member?.contactId) {
        return <div className="">Not logged in!</div>;
    }

    return (
        <div>
            <UserProfile currentUser={user}/>
        </div>
    );
}
