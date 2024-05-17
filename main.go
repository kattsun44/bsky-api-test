package main

import (
	"context"
	"fmt"
	"log"

	comatproto "github.com/bluesky-social/indigo/api/atproto"
	"github.com/bluesky-social/indigo/util/cliutil"
	"github.com/bluesky-social/indigo/xrpc"
	"github.com/joho/godotenv"
	"github.com/kattsun44/bsky-api-test/config"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
	cfg, err := config.New()
	if err != nil {
		panic(err)
	}

	xrpcc := &xrpc.Client{
		Client: cliutil.NewHttpClient(),
		Host:   cfg.Host,
		Auth:   &xrpc.AuthInfo{Handle: cfg.Handle},
	}

	auth, err := comatproto.ServerCreateSession(context.TODO(), xrpcc, &comatproto.ServerCreateSession_Input{
		Identifier: xrpcc.Auth.Handle,
		Password:   cfg.Password,
	})
	if err != nil {
		panic(err)
	}
	xrpcc.Auth.Did = auth.Did
	xrpcc.Auth.AccessJwt = auth.AccessJwt
	xrpcc.Auth.RefreshJwt = auth.RefreshJwt
	fmt.Println(xrpcc)
}
