import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "제로초" },
    { nickname: "제로초" },
  ];

  const followingList = [
    { nickname: "제로초" },
    { nickname: "제로초" },
    { nickname: "제로초" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로워 목록" data={followerList} />
        <FollowList header="팔로잉 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
