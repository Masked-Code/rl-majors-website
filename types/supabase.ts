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
      Player_Data: {
        Row: {
          bc_link: string | null
          created_at: string
          discord_id: string | null
          discord_username: string | null
          display_name: string | null
          division: number | null
          id: number
          platform: string | null
          platform_id: string | null
          season: number | null
          seasonal_stats: Json | null
          tags: Json | null
          tracker_link: string | null
        }
        Insert: {
          bc_link?: string | null
          created_at?: string
          discord_id?: string | null
          discord_username?: string | null
          display_name?: string | null
          division?: number | null
          id?: number
          platform?: string | null
          platform_id?: string | null
          season?: number | null
          seasonal_stats?: Json | null
          tags?: Json | null
          tracker_link?: string | null
        }
        Update: {
          bc_link?: string | null
          created_at?: string
          discord_id?: string | null
          discord_username?: string | null
          display_name?: string | null
          division?: number | null
          id?: number
          platform?: string | null
          platform_id?: string | null
          season?: number | null
          seasonal_stats?: Json | null
          tags?: Json | null
          tracker_link?: string | null
        }
        Relationships: []
      }
      Players: {
        Row: {
          created_at: string
          discord_id: string | null
          discord_username: string
          division: number | null
          id: number
          lifetime_assists: number | null
          lifetime_bpm: number | null
          lifetime_demos: number | null
          lifetime_goals: number | null
          lifetime_losses: number | null
          lifetime_saves: number | null
          lifetime_score: number | null
          lifetime_shots: number | null
          lifetime_wins: number | null
          platform: string | null
          rl_id: string | null
          tracker_link: string
        }
        Insert: {
          created_at?: string
          discord_id?: string | null
          discord_username?: string
          division?: number | null
          id?: number
          lifetime_assists?: number | null
          lifetime_bpm?: number | null
          lifetime_demos?: number | null
          lifetime_goals?: number | null
          lifetime_losses?: number | null
          lifetime_saves?: number | null
          lifetime_score?: number | null
          lifetime_shots?: number | null
          lifetime_wins?: number | null
          platform?: string | null
          rl_id?: string | null
          tracker_link?: string
        }
        Update: {
          created_at?: string
          discord_id?: string | null
          discord_username?: string
          division?: number | null
          id?: number
          lifetime_assists?: number | null
          lifetime_bpm?: number | null
          lifetime_demos?: number | null
          lifetime_goals?: number | null
          lifetime_losses?: number | null
          lifetime_saves?: number | null
          lifetime_score?: number | null
          lifetime_shots?: number | null
          lifetime_wins?: number | null
          platform?: string | null
          rl_id?: string | null
          tracker_link?: string
        }
        Relationships: []
      }
      S1_Player_Data: {
        Row: {
          assists: number | null
          bpm: number | null
          created_at: string
          demos: number | null
          discord_id: string | null
          discord_username: string | null
          division: number | null
          goals: number | null
          id: number
          losses: number | null
          price: number | null
          rl_id: string | null
          saves: number | null
          score: number | null
          shots: number | null
          tracker_link: string | null
          wins: number | null
        }
        Insert: {
          assists?: number | null
          bpm?: number | null
          created_at?: string
          demos?: number | null
          discord_id?: string | null
          discord_username?: string | null
          division?: number | null
          goals?: number | null
          id?: number
          losses?: number | null
          price?: number | null
          rl_id?: string | null
          saves?: number | null
          score?: number | null
          shots?: number | null
          tracker_link?: string | null
          wins?: number | null
        }
        Update: {
          assists?: number | null
          bpm?: number | null
          created_at?: string
          demos?: number | null
          discord_id?: string | null
          discord_username?: string | null
          division?: number | null
          goals?: number | null
          id?: number
          losses?: number | null
          price?: number | null
          rl_id?: string | null
          saves?: number | null
          score?: number | null
          shots?: number | null
          tracker_link?: string | null
          wins?: number | null
        }
        Relationships: []
      }
      S1_Team_Data: {
        Row: {
          created_at: string
          current_salary: number | null
          division: number | null
          franchise_owner: string | null
          goal_difference: number | null
          id: number
          losses: number | null
          non_captain_players: Json | null
          remaining_transactions: number
          team_captain: string | null
          team_name: string | null
          wins: number | null
        }
        Insert: {
          created_at?: string
          current_salary?: number | null
          division?: number | null
          franchise_owner?: string | null
          goal_difference?: number | null
          id?: number
          losses?: number | null
          non_captain_players?: Json | null
          remaining_transactions?: number
          team_captain?: string | null
          team_name?: string | null
          wins?: number | null
        }
        Update: {
          created_at?: string
          current_salary?: number | null
          division?: number | null
          franchise_owner?: string | null
          goal_difference?: number | null
          id?: number
          losses?: number | null
          non_captain_players?: Json | null
          remaining_transactions?: number
          team_captain?: string | null
          team_name?: string | null
          wins?: number | null
        }
        Relationships: []
      }
      Team_Data: {
        Row: {
          created_at: string
          division: number | null
          goal_difference: number | null
          id: number
          losses: number | null
          remaining_salary: number | null
          remaining_transactions: number | null
          season: number | null
          series_ffed: number | null
          team_captain: string | null
          team_name: string | null
          team_owner: string | null
          team_players: string[] | null
          wins: number | null
        }
        Insert: {
          created_at?: string
          division?: number | null
          goal_difference?: number | null
          id?: number
          losses?: number | null
          remaining_salary?: number | null
          remaining_transactions?: number | null
          season?: number | null
          series_ffed?: number | null
          team_captain?: string | null
          team_name?: string | null
          team_owner?: string | null
          team_players?: string[] | null
          wins?: number | null
        }
        Update: {
          created_at?: string
          division?: number | null
          goal_difference?: number | null
          id?: number
          losses?: number | null
          remaining_salary?: number | null
          remaining_transactions?: number | null
          season?: number | null
          series_ffed?: number | null
          team_captain?: string | null
          team_name?: string | null
          team_owner?: string | null
          team_players?: string[] | null
          wins?: number | null
        }
        Relationships: []
      }
      Teams: {
        Row: {
          created_at: string
          division: number | null
          franchise_owner: string | null
          id: number
          lifetime_assists: number
          lifetime_demos: number
          lifetime_goals: number
          lifetime_losses: number
          lifetime_saves: number
          lifetime_score: number
          lifetime_shots: number
          lifetime_wins: number
          team_name: string | null
        }
        Insert: {
          created_at?: string
          division?: number | null
          franchise_owner?: string | null
          id?: number
          lifetime_assists?: number
          lifetime_demos?: number
          lifetime_goals?: number
          lifetime_losses?: number
          lifetime_saves?: number
          lifetime_score?: number
          lifetime_shots?: number
          lifetime_wins?: number
          team_name?: string | null
        }
        Update: {
          created_at?: string
          division?: number | null
          franchise_owner?: string | null
          id?: number
          lifetime_assists?: number
          lifetime_demos?: number
          lifetime_goals?: number
          lifetime_losses?: number
          lifetime_saves?: number
          lifetime_score?: number
          lifetime_shots?: number
          lifetime_wins?: number
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
