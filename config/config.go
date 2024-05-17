package config

import "github.com/caarlos0/env"

type Config struct {
	Host     string `env:"HOST" envDefault:"https://bsky.social"`
	Handle   string `env:"HANDLE" envDefault:"kattsun.dev"`
	Password string `env:"PASSWORD" envDefault:"password"`
}

func New() (*Config, error) {
	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		return nil, err
	}
	return cfg, nil
}
