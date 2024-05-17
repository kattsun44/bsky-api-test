package main

func int64p(i *int64) int64 {
	if i == nil {
		return 0
	}
	return *i
}

func stringp(s *string) string {
	if s == nil {
		return ""
	}
	return *s
}
