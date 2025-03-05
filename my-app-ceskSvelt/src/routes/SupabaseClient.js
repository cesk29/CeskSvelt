import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hzcxlarhvpqdbblczumo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Y3hsYXJodnBxZGJibGN6dW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjkyMDAsImV4cCI6MjA0NjkwNTIwMH0.Y-RktvdX1ay005YxdUG9Wv0SRSjZwAIq2hIKxpEJ9UA')