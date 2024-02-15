'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Link from 'next/link'
import { useSession, getSession } from 'next-auth/react'
import { useProfile } from '../hooks/useProfile';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomButton from '@/components/ui/custom-button';
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EditProfile() {
  const router = useRouter()
  const { data: session } = useSession();
  const { profile, mutate } = useProfile();

  const [name, setName] = useState(profile?.name || session?.user?.name || "");
  const [age, setAge] = useState(profile?.age || "");
  const [skinType, setSkinType] = useState(profile?.skinType || "");
  const [skinTrouble, setSkinTrouble] = useState(profile?.skinTrouble || "");
  const [avatar, setAvatar] = useState(profile?.avatar || session?.user?.image || '/default-avatar.png');
  const [prefecture, setPrefecture] = useState(profile?.prefecture || "");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const session = await getSession();
    const token = session?.accessToken;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const profileData = {
      name: name,
      age: age,
      skin_type: skinType,
      skin_trouble: skinTrouble,
      avatar: avatar,
      prefecture: prefecture
    };

    try {
      const updatedProfile = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/profiles/update`, profileData, {
        headers: headers,
        withCredentials: true
      });

      // mutateを使用してローカルキャッシュを更新
      mutate(updatedProfile.data);

      router.push('/my_page');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error)
        // エラーレスポンスが存在し、その中にメッセージがある場合は表示する
        if (error.response && error.response.data && typeof error.response.data.message === 'string') {
          toast.error(error.response.data.message);
        } else {
          // その他のエラーの場合は汎用的なメッセージを表示
          toast.error("編集に問題が発生しました");
        }
      }
    }
  }

  return (
    session ? (
      <div className='bg-background-color flex justify-center h-screen p-10 text-text-color font-genjyuu'>
        <div className="w-full max-w-sm text-left">
          <div className="mb-6">
            <Label htmlFor="name">お名前</Label>
            <Input
              value={profile?.name || session?.user?.name}
              type="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="age">年代</Label>
            <Select onValueChange={value => setAge(value)}>
              <SelectTrigger>
                <SelectValue className="text-text-color" placeholder={profile?.age || "年代"} />
              </SelectTrigger>
              <SelectContent className="text-text-color">
                <SelectItem value="10代">10代</SelectItem>
                <SelectItem value="20代">20代</SelectItem>
                <SelectItem value="30代">30代</SelectItem>
                <SelectItem value="40代">40代</SelectItem>
                <SelectItem value="50代">50代</SelectItem>
                <SelectItem value="60代以上">60代以上</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label htmlFor="skinType">肌質</Label>
            <Select onValueChange={setSkinType}>
              <SelectTrigger>
                <SelectValue className="text-text-color" placeholder={profile?.skin_type || "肌質"} />
              </SelectTrigger>
              <SelectContent className="text-text-color">
                <SelectItem value="乾燥肌">乾燥肌</SelectItem>
                <SelectItem value="混合肌">混合肌</SelectItem>
                <SelectItem value="脂性肌">脂性肌</SelectItem>
                <SelectItem value="普通肌">普通肌</SelectItem>
                <SelectItem value="敏感肌">敏感肌</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label htmlFor="skinTrouble">肌悩み</Label>
            <Select onValueChange={setSkinTrouble}>
              <SelectTrigger>
                <SelectValue className="text-text-color" placeholder={profile?.skin_trouble || "肌悩み"} />
              </SelectTrigger>
              <SelectContent className="text-text-color">
                <SelectItem value="保湿">保湿</SelectItem>
                <SelectItem value="ニキビ">ニキビ</SelectItem>
                <SelectItem value="毛穴・黒ずみ">毛穴・黒ずみ</SelectItem>
                <SelectItem value="美白">美白</SelectItem>
                <SelectItem value="肌のハリ・弾力">肌のハリ・弾力</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label htmlFor="prefecture">お住まい</Label>
            <Select onValueChange={setPrefecture}>
              <SelectTrigger>
                <SelectValue className="text-text-color" placeholder={profile?.prefecture || "お住まい"} />
              </SelectTrigger>
              <SelectContent className="text-text-color">
                <SelectItem value="北海道">北海道</SelectItem>
                <SelectItem value="青森県">青森県</SelectItem>
                <SelectItem value="岩手県">岩手県</SelectItem>
                <SelectItem value="宮城県">宮城県</SelectItem>
                <SelectItem value="秋田県">秋田県</SelectItem>
                <SelectItem value="山形県">山形県</SelectItem>
                <SelectItem value="福島県">福島県</SelectItem>
                <SelectItem value="茨城県">茨城県</SelectItem>
                <SelectItem value="栃木県">栃木県</SelectItem>
                <SelectItem value="群馬県">群馬県</SelectItem>
                <SelectItem value="埼玉県">埼玉県</SelectItem>
                <SelectItem value="千葉県">千葉県</SelectItem>
                <SelectItem value="東京都">東京都</SelectItem>
                <SelectItem value="神奈川県">神奈川県</SelectItem>
                <SelectItem value="山梨県">山梨県</SelectItem>
                <SelectItem value="長野県">長野県</SelectItem>
                <SelectItem value="新潟県">新潟県</SelectItem>
                <SelectItem value="富山県">富山県</SelectItem>
                <SelectItem value="石川県">石川県</SelectItem>
                <SelectItem value="福井県">福井県</SelectItem>
                <SelectItem value="岐阜県">岐阜県</SelectItem>
                <SelectItem value="静岡県">静岡県</SelectItem>
                <SelectItem value="愛知県">愛知県</SelectItem>
                <SelectItem value="三重県">三重県</SelectItem>
                <SelectItem value="滋賀県">滋賀県</SelectItem>
                <SelectItem value="京都府">京都府</SelectItem>
                <SelectItem value="大阪府">大阪府</SelectItem>
                <SelectItem value="兵庫県">兵庫県</SelectItem>
                <SelectItem value="奈良県">奈良県</SelectItem>
                <SelectItem value="和歌山県">和歌山県</SelectItem>
                <SelectItem value="鳥取県">鳥取県</SelectItem>
                <SelectItem value="島根県">島根県</SelectItem>
                <SelectItem value="岡山県">岡山県</SelectItem>
                <SelectItem value="広島県">広島県</SelectItem>
                <SelectItem value="山口県">山口県</SelectItem>
                <SelectItem value="徳島県">徳島県</SelectItem>
                <SelectItem value="香川県">香川県</SelectItem>
                <SelectItem value="愛媛県">愛媛県</SelectItem>
                <SelectItem value="高知県">高知県</SelectItem>
                <SelectItem value="福岡県">福岡県</SelectItem>
                <SelectItem value="佐賀県">佐賀県</SelectItem>
                <SelectItem value="長崎県">長崎県</SelectItem>
                <SelectItem value="熊本県">熊本県</SelectItem>
                <SelectItem value="大分県">大分県</SelectItem>
                <SelectItem value="宮崎県">宮崎県</SelectItem>
                <SelectItem value="鹿児島県">鹿児島県</SelectItem>
                <SelectItem value="沖縄県">沖縄県</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label htmlFor="avatar">アバター画像</Label>
            <Image
              src={avatar || session.user?.image || '/default-avatar.png'}
              alt="User Avatar"
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
            <Input className="mt-6"
              type="file"
              id="avatar"
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setAvatar(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }
              }}
            />
          </div>
          <div className="w-full pt-4 pb-4" onClick={handleSubmit}>
            <CustomButton colorClass="btn-506D7D w-full">
              更新する
            </CustomButton>
          </div>
          <div className="w-full pb-10">
            <Link href='/my_page'>
              <Button className="text-md bg-F5F5F5 text-48352F w-full hover:bg-E0DBD2">
                キャンセル
              </Button>
            </Link>
          </div>
        </div>
      </div>
    ) : null
  );
}