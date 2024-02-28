import { createError } from 'h3'
import type { Database } from '~~/types/supabase'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  const client = await serverSupabaseClient<Database>(event)

  const { data, error } = await client.from('S1_D1_Prices').select('').order('price')
  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})