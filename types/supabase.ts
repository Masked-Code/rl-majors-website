export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Players: {
        Row: {
          created_at: string
          discord_id: string | null
          id: number
          platform: string | null
          rl_id: string | null
        }
        Insert: {
          created_at?: string
          discord_id?: string | null
          id?: number
          platform?: string | null
          rl_id?: string | null
        }
        Update: {
          created_at?: string
          discord_id?: string | null
          id?: number
          platform?: string | null
          rl_id?: string | null
        }
        Relationships: []
      }
      S1_D1_Prices: {
        Row: {
          created_at: string
          discord_id: string
          id: number
          price: number | null
          rl_id: string
          tracker_link: string
        }
        Insert: {
          created_at?: string
          discord_id?: string
          id?: number
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Update: {
          created_at?: string
          discord_id?: string
          id?: number
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Relationships: []
      }
      S1_D2_Prices: {
        Row: {
          created_at: string
          discord_id: string
          price: number | null
          rl_id: string
          tracker_link: string
        }
        Insert: {
          created_at?: string
          discord_id?: string
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Update: {
          created_at?: string
          discord_id?: string
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Relationships: []
      }
      S1_D3_Prices: {
        Row: {
          created_at: string
          discord_id: string
          id: number
          price: number | null
          rl_id: string
          tracker_link: string
        }
        Insert: {
          created_at?: string
          discord_id?: string
          id?: number
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Update: {
          created_at?: string
          discord_id?: string
          id?: number
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Relationships: []
      }
      S1_Prices: {
        Row: {
          created_at: string | null
          discord_id: string
          price: number | null
          rl_id: string
          tracker_link: string
        }
        Insert: {
          created_at?: string | null
          discord_id?: string
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Update: {
          created_at?: string | null
          discord_id?: string
          price?: number | null
          rl_id?: string
          tracker_link?: string
        }
        Relationships: []
      }
      S1_Teams: {
        Row: {
          created_at: string
          current_salary: number | null
          division: number | null
          franchise_owner: string | null
          id: number
          non_captain_players: Json | null
          remaining_transactions: number
          team_captain: string | null
          team_name: string | null
        }
        Insert: {
          created_at?: string
          current_salary?: number | null
          division?: number | null
          franchise_owner?: string | null
          id?: number
          non_captain_players?: Json | null
          remaining_transactions?: number
          team_captain?: string | null
          team_name?: string | null
        }
        Update: {
          created_at?: string
          current_salary?: number | null
          division?: number | null
          franchise_owner?: string | null
          id?: number
          non_captain_players?: Json | null
          remaining_transactions?: number
          team_captain?: string | null
          team_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
