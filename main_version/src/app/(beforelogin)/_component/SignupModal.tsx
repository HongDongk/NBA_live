// 서버액션 사용해서 회원가입
'use client';

import style from './signup.module.css';
import BackButton from '@/app/(beforelogin)/_component/BackButton';
import onSubmit from '@/app/(beforelogin)/_lib/signup';
import { useFormState, useFormStatus } from 'react-dom';

function showMessage(messasge: any) {
  if (messasge === 'no_id') {
    return '아이디를 입력하세요.';
  }
  if (messasge === 'no_name') {
    return '닉네임을 입력하세요.';
  }
  if (messasge === 'no_password') {
    return '비밀번호를 입력하세요.';
  }
  if (messasge === 'no_image') {
    return '이미지를 업로드하세요.';
  }
  if (messasge === 'user_exists') {
    return '이미 사용 중인 아이디입니다.';
  }
  return '';
}

export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, { message: '' });
  const { pending } = useFormStatus(); // 회원가입 서버처리중인 상황일 때

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  사용하실 아이디를 입력해주세요
                </label>
                <input id="id" name="id" className={style.input} type="text" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임을 입력해주세요
                </label>
                <input id="name" name="name" className={style.input} type="text" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호를 입력해주세요
                </label>
                <input id="password" name="password" className={style.input} type="password" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필을 등록해주세요
                </label>
                <input id="image" name="image" required className={style.input} type="file" accept="image/*" />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button type="submit" className={style.actionButton} disabled={pending}>
                가입하기
              </button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
