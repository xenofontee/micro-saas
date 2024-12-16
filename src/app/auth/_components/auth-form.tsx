export default function AuthForm() {
    return (
        'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendMagicLink } from '../actions/auth'

export function AuthForm() {
  const [error, setError] = useState<string | null>(null)
  const { pending } = useFormStatus()

  async function handleSubmit(formData: FormData) {
    const result = await sendMagicLink(formData)
    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? 'Sending...' : 'Send Magic Link'}
      </Button>
    </form>
  )
}


    )
}