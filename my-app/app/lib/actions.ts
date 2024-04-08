'use server';

import { date, z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  preState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return '用户名或密码错误';
        default:
          return '其他错误.';
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'select a cutomer',
  }),
  amount: z.coerce.number().gt(0, { message: 'enter an amount' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'select a status',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(preState: State, formData: FormData) {
  //   const rawData = Object.fromEntries(formData.entries());
  console.log(`${preState}`);
  console.log(`${formData}`);
  const validData = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  if (!validData.success) {
    console.log(`来了老弟 ${validData.error}`);
    return {
      errors: validData.error.flatten().fieldErrors,
      message: 'something error',
    };
  }
  const { customerId, amount, status } = validData.data;
  const cdate = new Date().toLocaleDateString();
  const amount100 = amount * 100;
  try {
    await sql`insert into invoices(customer_id,amount,date,status) values(${customerId},${amount100},${cdate},${status})`;
    console.log('插入成功');
  } catch (error) {
    return {
      message: ' create failed in database',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  console.log(rawData);
  const { customerId, amount, status } = CreateInvoice.parse(rawData);
  const cdate = new Date().toLocaleDateString();
  const amount100 = amount * 100;
  try {
    await sql`update invoices set customer_id=${customerId},amount=${amount100},date=${cdate},status=${status} where id=${id}`;
    console.log('更新成功');
  } catch (error) {
    return {
      message: 'update failed in database',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string, formData: FormData) {
  try {
    await sql`delete from invoices where id=${id}`;
    console.log('删除成功');
  } catch (error) {
    return {
      message: 'delete failed in database',
    };
  }
  revalidatePath('/dashboard/invoices');
  // redirect('/dashboard/invoices')
}
